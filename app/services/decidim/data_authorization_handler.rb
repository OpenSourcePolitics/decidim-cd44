# frozen_string_literal: true

module Decidim
  class DataAuthorizationHandler < Decidim::AuthorizationHandler
    # Import valid_phone to make it execute
    attribute :firstname, String
    attribute :lastname, String
    attribute :phone, String
    attribute :structure, String

    validates :firstname, presence: true, format: { with: /\A[a-zA-ZÀ-ÿ'\-\s]+\z/,
                                                    message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.error_message") }
    validates :lastname, presence: true, format: { with: /\A[a-zA-ZÀ-ÿ'\-\s]+\z/,
                                                   message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.error_message") }
    validates :phone, presence: true

    def metadata
      super.merge(firstname: firstname, lastname: lastname, phone: phone, structure: structure)
    end
  end
end
