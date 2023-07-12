# frozen_string_literal: true

module Decidim
  module Verifications
    # A command to Destroy the Authorization of a user.
    class DestroyUserAuthorization < Decidim::Command
      # rubocop:disable Lint/MissingSuper
      def initialize(authorization)
        @authorization = authorization
      end
      # rubocop:enable Lint/MissingSuper

      def call
        return broadcast(:invalid) unless authorization

        authorization.destroy!
        remove_user_extended_data!(authorization)

        broadcast(:ok, authorization)
      end

      private

      def remove_user_extended_data!(auth)
        return unless auth.name == "extended_socio_demographic_authorization_handler" || auth.name == "data_authorization_handler"

        extended_data = auth.user.extended_data.except(auth.name)
        auth.user.update!(extended_data: extended_data)
      end

      attr_reader :authorization
    end
  end
end
