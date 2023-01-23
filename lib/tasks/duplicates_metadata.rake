# frozen_string_literal: true

namespace :decidim do
  namespace :duplicates do
    desc "Merge all authorization encrypted metadata to decrypted metadata in user extended data"
    task metadata: :environment do
      logger = Logger.new($stdout)
      logger.info(logger_output("Retrieving all extended socio demographic and data authorizations"))

      socio_authorizations = Decidim::Authorization.where(name: "extended_socio_demographic_authorization_handler")
      data_authorizations = Decidim::Authorization.where(name: "data_authorization_handler")

      updated = update_socio_authorized_users(socio_authorizations) + update_data_authorized_users(data_authorizations)

      logger.info(logger_output("Found #{socio_authorizations.count} extended socio demographic authorizations"))
      logger.info(logger_output("Found #{data_authorizations.count} data authorizations"))
      logger.info(logger_output("Updated #{updated.count} users : #{updated.count.positive? ? updated : "None"}"))

      exit 0
    end
  end
end

def logger_output(msg = "", task_name = "decidim:duplicates:metadata")
  "[#{task_name}] :: #{msg}"
end

def update_socio_authorized_users(socio_authorizations)
  updated = []
  socio_authorizations.each do |auth|
    if auth.user.blank? || !auth.user.respond_to?(:extended_data)
      logger.error(logger_output("Undefined user for authorization ID/#{auth.id}"))
      next
    end

    next if auth.user.extended_data.include?("extended_socio_demographic_authorization_handler")

    if auth.user.extended_data.include?("socio_postal_code")
      metadata = {
        "postal_code" => auth.user.extended_data["socio_postal_code"],
        "city" => auth.user.extended_data["socio_city"],
        "email" => auth.user.extended_data["socio_email"],
        "phone_number" => auth.user.extended_data["socio_phone_number"]
      }
      auth.user.update!(extended_data: auth.user.extended_data.reject { |key| key.start_with?("socio_") })
    end
    if auth.user.update(extended_data: {"extended_socio_demographic_authorization_handler" => auth.user.extended_data.merge(metadata || auth.metadata)})
      logger.info(logger_output("Updating user (ID/#{auth.user.id})"))
      updated << auth.user.id
    else
      logger.error(logger_output("Errors happened while updating user (ID/#{auth.user.id})"))
    end
  end
  updated
end

def update_data_authorized_users(data_authorizations)
  updated = []
  data_authorizations.each do |auth|
    if auth.user.blank? || !auth.user.respond_to?(:extended_data)
      logger.error(logger_output("Undefined user for authorization ID/#{auth.id}"))
      next
    end

    next if auth.user.extended_data.include?("data_authorization_handler")

    if auth.user.update(extended_data: {"data_authorization_handler" => auth.user.extended_data.merge(auth.metadata)})
      logger.info(logger_output("Updating user (ID/#{auth.user.id})"))
      updated << auth.user.id
    else
      logger.error(logger_output("Errors happened while updating user (ID/#{auth.user.id})"))
    end
  end
  updated
end
