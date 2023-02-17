# frozen_string_literal: true

module Decidim
  class DuplicatesMetadata
    def initialize
      @authorizations = Decidim::Authorization.where(name: %w(data_authorization_handler extended_socio_demographic_authorization_handler))
    end

    def perform
      update_authorized_users
    end

    def update_authorized_users
      return if @authorizations.blank?

      @authorizations.each do |auth|
        if auth.user.blank? || !auth.user.respond_to?(:extended_data)
          logger.error(logger_output("Undefined user for authorization ID/#{auth.id}"))
          next
        end

        next if auth.user.extended_data.include?(auth.name)

        if auth.name == "extended_socio_demographic_authorization_handler" && auth.user.extended_data.include?("socio_postal_code")
          metadata = {
            "postal_code" => auth.user.extended_data["socio_postal_code"],
            "city" => auth.user.extended_data["socio_city"],
            "email" => auth.user.extended_data["socio_email"],
            "phone_number" => auth.user.extended_data["socio_phone_number"]
          }
          auth.user.update!(extended_data: auth.user.extended_data.reject { |key| key.start_with?("socio_") })
        end

        update_user_metadata(auth, metadata || auth.metadata)
      end
    end

    private

    attr_reader :authorizations

    def update_user_metadata(auth, metadata)
      auth.user.update!(extended_data: auth.user.extended_data.merge(auth.name => metadata))
    end

    def logger_output(msg = "", task_name = "decidim:duplicates:metadata")
      "[#{task_name}] :: #{msg}"
    end
  end
end
