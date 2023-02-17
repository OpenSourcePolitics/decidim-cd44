# frozen_string_literal: true

require "spec_helper"

module Decidim
  describe DuplicatesMetadata do
    let(:organization) { create(:organization) }
    let!(:user) { create(:user, organization: organization) }
    let!(:socio_authorization) { create(:authorization, user: user, metadata: socio_metadata, name: "extended_socio_demographic_authorization_handler") }
    let!(:data_authorization) { create(:authorization, user: user, metadata: data_metadata, name: "data_authorization_handler") }
    let!(:user2) { create(:user, organization: organization) }
    let!(:socio_authorization_user2) { create(:authorization, user: user2, metadata: socio_metadata_user2, name: "extended_socio_demographic_authorization_handler") }
    let!(:data_authorization_user2) { create(:authorization, user: user2, metadata: data_metadata_user2, name: "data_authorization_handler") }
    let(:socio_metadata) { { "email" => user.email, "postal_code" => "12345", "city" => "Barcelona", "phone_number" => "01234567889" } }
    let(:data_metadata) { { "minmum_age" => true, "gdpr" => true, "zipcode" => "12345" } }
    let(:socio_metadata_user2) { { "email" => user2.email, "postal_code" => "54321", "city" => "Paris", "phone_number" => "9876543210" } }
    let(:data_metadata_user2) { { "minmum_age" => true, "gdpr" => true, "zipcode" => "54321" } }

    context "when user has no metadata" do
      it "duplicates encrypted metadata to user registration_metadata" do
        expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to be_nil
        expect(user.extended_data["data_authorization_handler"]).to be_nil
        expect(user2.extended_data["extended_socio_demographic_authorization_handler"]).to be_nil
        expect(user2.extended_data["data_authorization_handler"]).to be_nil
        described_class.new.perform
        user.reload
        user2.reload
        expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata)
        expect(user.extended_data["data_authorization_handler"]).to eq(data_metadata)
        expect(user2.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata_user2)
        expect(user2.extended_data["data_authorization_handler"]).to eq(data_metadata_user2)
      end
    end

    context "when user has metadata" do
      let!(:user) { create(:user, organization: organization) }
      let(:user_extended_data) { { "extended_socio_demographic_authorization_handler" => { "email" => user.email, "postal_code" => "12345", "city" => "Barcelona", "phone_number" => "01234567889" } } }

      before do
        user.update!(extended_data: user_extended_data)
      end

      it "duplicates encrypted metadata to user registration_metadata" do
        expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(user_extended_data["extended_socio_demographic_authorization_handler"])
        expect(user.extended_data["data_authorization_handler"]).to be_nil
        described_class.new.perform
        user.reload
        expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(user_extended_data["extended_socio_demographic_authorization_handler"])
        expect(user.extended_data["data_authorization_handler"]).to eq(data_metadata)
      end
    end

    context "when user has already metadata for socio but the old format" do
      let!(:user) { create(:user, organization: organization) }

      before do
        user.update!(extended_data: {
                       "socio_email" => socio_metadata["email"],
                       "socio_postal_code" => socio_metadata["postal_code"],
                       "socio_city" => socio_metadata["city"],
                       "socio_phone_number" => socio_metadata["phone_number"]
                     })
      end

      it "duplicates encrypted metadata to user registration_metadata" do
        described_class.new.perform
        user.reload
        expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata)
        expect(user.extended_data["data_authorization_handler"]).to eq(data_metadata)
      end
    end
  end
end
