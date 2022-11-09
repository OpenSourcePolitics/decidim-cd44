# frozen_string_literal: true

module Decidim
  class DataAuthorizationHandler < Decidim::AuthorizationHandler
    attribute :firstname, String
    attribute :lastname, String
    attribute :phone, String
    attribute :structure, String
    attribute :gdpr, Boolean

    validates :gdpr, acceptance: true
    validates :lastname, presence: true
    validates :firstname, presence: true
    validates :phone, presence: true, format: { with: /\A0[1-9]\d{8}\z/, message: I18n.t("decidim.authorization_handlers.data_authorization_handler.errors.phone_invalid") }

    def metadata
      super.merge(firstname: firstname, lastname: lastname, phone: phone, structure: structure)
    end
  end
end
