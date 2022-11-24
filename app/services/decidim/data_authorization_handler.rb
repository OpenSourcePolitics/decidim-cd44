# frozen_string_literal: true

module Decidim
  class DataAuthorizationHandler < Decidim::AuthorizationHandler
    # Import valid_phone to make it execute
    attribute :firstname, String
    attribute :lastname, String
    attribute :phone, String
    attribute :gdpr, Boolean
    attribute :minimum_age, Boolean
    attribute :zipcode, String
    attribute :city, String


    validates :firstname, presence: true, format: { with: /\A[a-zA-ZÀ-ÿ'\-\s]+\z/,
                                                    message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.error_message") }
    validates :lastname, presence: true, format: { with: /\A[a-zA-ZÀ-ÿ'\-\s]+\z/,
                                                   message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.error_message") }
    validates :phone, presence: true

    validates :gdpr, acceptance: { message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.acceptance_error") }

    validates :minimum_age, acceptance: { message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.acceptance_error") }

    validates :zipcode, presence: true, format: { with: /\A[0-9]{5}\z/,
                                                  message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.error_message") }

    validates :city, presence: { message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.no_zipcode_result") }

    def metadata
      super.merge(firstname: firstname, lastname: lastname, phone: phone, zipcode: zipcode, city: city)
    end
  end
end
