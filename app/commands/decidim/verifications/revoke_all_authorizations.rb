# frozen_string_literal: true

module Decidim
  module Verifications
    # A command to revoke authorizations
    class RevokeAllAuthorizations < Rectify::Command
      # Public: Initializes the command.
      #
      # organization - Organization object.
      # current_user - The current user.
      # rubocop:disable Lint/MissingSuper
      def initialize(organization, current_user)
        @organization = organization
        @current_user = current_user
      end
      # rubocop:enable Lint/MissingSuper

      # Executes the command. Broadcasts these events:
      #
      # - :ok when everything is valid.
      # - :invalid if the handler wasn't valid and we couldn't proceed.
      #
      # Returns nothing.
      def call
        return broadcast(:invalid) unless @organization

        auths = Decidim::Verifications::Authorizations.new(
          organization: organization,
          granted: true
        ).query

        auths.find_each do |auth|
          Decidim.traceability.perform_action!(
            :destroy,
            auth,
            current_user
          ) do
            remove_user_extended_data!(auth)
            auth.destroy
          end
        end

        broadcast(:ok)
      end

      private

      def remove_user_extended_data!(auth)
        return unless auth.name == "extended_socio_demographic_authorization_handler"

        extended_data = auth.user.extended_data.reject { |key| key.start_with?("socio_") }
        auth.user.update!(extended_data: extended_data)
      end

      attr_reader :organization, :current_user
    end
  end
end
