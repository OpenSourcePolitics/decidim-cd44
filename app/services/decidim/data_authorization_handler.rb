# frozen_string_literal: true

module Decidim
  class DataAuthorizationHandler < Decidim::AuthorizationHandler
    # Import valid_phone to make it execute
    attribute :firstname, String
    attribute :lastname, String
    attribute :phone, String
    attribute :structure, String

    validates :lastname, presence: true, length: { minimum: 1 }
    validates :firstname, presence: true, length: { minimum: 1 }
    validates :phone, presence: true,
                      format: { with: /\A(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})\z/,
                                message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.phone_invalid") }
    def metadata
      super.merge(firstname: firstname, lastname: lastname, phone: phone, structure: structure)
    end
  end
end
