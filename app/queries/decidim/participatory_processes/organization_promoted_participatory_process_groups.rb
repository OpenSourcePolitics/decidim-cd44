# frozen_string_literal: true

module Decidim
  module ParticipatoryProcesses
    # This query class filters participatory process groups given an organization.
    class OrganizationPromotedParticipatoryProcessGroups < Rectify::Query
      # rubocop:disable Lint/MissingSuper
      def initialize(organization)
        @organization = organization
      end
      # rubocop:enable Lint/MissingSuper

      def query
        PromotedParticipatoryProcessGroups.new.query.where(organization: @organization)
      end
    end
  end
end
