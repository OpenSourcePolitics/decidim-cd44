# frozen_string_literal: true

namespace :decidim do
  namespace :duplicates do
    desc "Merge all authorization encrypted metadata to decrypted metadata in user extended data"
    task metadata: :environment do
      logger = Logger.new($stdout)
      logger.info(logger_output("Retrieving all extended socio demographic authorizations"))

      authorizations = Decidim::Authorization.where(name: "extended_socio_demographic_authorization_handler")
      updated = []
      authorizations.each do |auth|
        if auth.user.blank? || !auth.user.respond_to?(:extended_data)
          logger.error(logger_output "Undefined user for authorization ID/#{auth.id}")
          next
        end
        next if auth.user.extended_data.include?("socio_postal_code") || auth.user.extended_data.include?("socio_city") || auth.user.extended_data.include?("socio_email") || auth.user.extended_data.include?("socio_phone_number")

        extended_data = auth.metadata.deep_transform_keys { |key| "socio_#{key}" }

        if auth.user.update_column(:extended_data, auth.user.extended_data.merge(extended_data))
          logger.info(logger_output "Updating user (ID/#{auth.user.id})")
          updated << auth.user.id
        else
          logger.error(logger_output "Errors happened while updating user (ID/#{auth.user.id})")
        end
      end
      logger.info(logger_output "Found #{authorizations.count} extended socio demographic authorizations")
      logger.info(logger_output "Updated #{updated.count} users : #{updated.count.positive? ? updated : "None"}")

      exit 0
    end
  end
end

def logger_output(msg ="", task_name = "decidim:duplicates:metadata")
  "[#{task_name}] :: #{msg}"
end
