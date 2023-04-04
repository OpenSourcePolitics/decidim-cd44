# frozen_string_literal: true

require "spec_helper"

module Decidim::Verifications
  describe DestroyUserAuthorization do
    subject { described_class.new(authorization) }

    let(:user) { create(:user, :confirmed, extended_data: extended_data) }
    let(:extended_data) do
      {
        "extra_data" => "Extra data",
        "extended_socio_demographic_authorization_handler" => {
          "work_area" => "Work area",
          "residential_area" => "Residential area"
        },
        "data_authorization_handler" => {
          "minimum_age" => true,
          "gdpr" => true
        }
      }
    end
    let(:metadata_socio) do
      {
        "work_area" => "Work area",
        "residential_area" => "Residential area"
      }
    end
    let(:metadata_data) do
      {
        "minimum_age" => true,
        "gdpr" => true
      }
    end
    let(:authorizations) { Authorizations.new(organization: user.organization, user: user, granted: true) }

    context "when no authorization" do
      let(:authorization) { nil }

      it "is not valid" do
        expect { subject.call }.to broadcast(:invalid)
      end
    end

    context "when everything is ok" do
      context "when authoriziation is a ExtendedSocioDemographic" do
        let!(:authorization) { create(:authorization, :granted, name: "extended_socio_demographic_authorization_handler", user: user, metadata: metadata_socio) }

        it "destroys the authorization for the user" do
          expect { subject.call }.to change(authorizations, :count).by(-1)
        end

        it "removes metadata in user extended data" do
          expect(user.extended_data).to eq(extended_data)
          subject.call

          expect(user.extended_data).to include("extra_data")
          expect(user.extended_data).not_to include("extended_socio_demographic_authorization_handler")
        end
      end

      context "when authoriziation is a Data" do
        let!(:authorization) { create(:authorization, :granted, name: "data_authorization_handler", user: user, metadata: metadata_data) }

        it "destroys the authorization for the user" do
          expect { subject.call }.to change(authorizations, :count).by(-1)
        end

        it "removes metadata in user extended data" do
          expect(user.extended_data).to eq(extended_data)
          subject.call

          expect(user.extended_data).to include("extra_data")
          expect(user.extended_data).not_to include("data_authorization_handler")
        end
      end

      context "when authorization is not a ExtendedSocioDemographicAuthorizationHandler" do
        let!(:authorization) { create(:authorization, :granted, user: user) }

        it "doesn't clear user extended data" do
          expect { subject.call }.not_to change(user, :extended_data)
        end
      end
    end
  end
end
