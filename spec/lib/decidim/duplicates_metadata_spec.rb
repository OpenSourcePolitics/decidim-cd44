# frozen_string_literal: true

require "spec_helper"
require "decidim/duplicates_metadata"

describe Decidim::DuplicatesMetadata do
  subject { described_class.new }

  let(:organization) { create(:organization) }

  let!(:user) { create(:user, organization: organization) }
  let!(:user2) { create(:user, organization: organization) }

  let!(:socio_authorization) do
    create(:authorization,
           user: user,
           metadata: { "email" => user.email, "postal_code" => "12345", "city" => "Barcelona", "phone_number" => "01234567889" },
           name: "extended_socio_demographic_authorization_handler")
  end
  let!(:socio_authorization_user2) do
    create(:authorization,
           user: user2,
           metadata: { "email" => user2.email, "postal_code" => "54321", "city" => "Paris", "phone_number" => "9876543210" },
           name: "extended_socio_demographic_authorization_handler")
  end

  let!(:data_authorization) do
    create(:authorization,
           user: user,
           metadata: { "minmum_age" => true, "gdpr" => true, "zipcode" => "12345" },
           name: "data_authorization_handler")
  end
  let!(:data_authorization_user2) do
    create(:authorization,
           user: user2,
           metadata: { "minmum_age" => true, "gdpr" => true, "zipcode" => "54321" },
           name: "data_authorization_handler")
  end

  context "when user has no metadata" do
    before do
      expect(user.extended_data).not_to include("extended_socio_demographic_authorization_handler", "data_authorization_handler")
      expect(user2.extended_data).not_to include("extended_socio_demographic_authorization_handler", "data_authorization_handler")

      subject.perform
      user.reload
      user2.reload
    end

    it "has duplicated encrypted metadata to user registration_metadata" do
      expect(user.extended_data).to include(
        "extended_socio_demographic_authorization_handler" => socio_authorization.metadata,
        "data_authorization_handler" => data_authorization.metadata
      )

      expect(user2.extended_data).to include(
        "extended_socio_demographic_authorization_handler" => socio_authorization_user2.metadata,
        "data_authorization_handler" => data_authorization_user2.metadata
      )
    end
  end

  context "when user has metadata" do
    let!(:user) { create(:user, organization: organization) }
    let(:user_extended_data) do
      { "extended_socio_demographic_authorization_handler" =>
                                   { "email" => user.email, "postal_code" => "12345",
                                     "city" => "Barcelona", "phone_number" => "01234567889" } }
    end

    before do
      user.update!(extended_data: user_extended_data)

      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(user_extended_data["extended_socio_demographic_authorization_handler"])
      expect(user.extended_data["data_authorization_handler"]).to be_nil

      subject.perform
      user.reload
    end

    it "duplicates encrypted metadata to user registration_metadata" do
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(user_extended_data["extended_socio_demographic_authorization_handler"])
      expect(user.extended_data["data_authorization_handler"]).to eq(data_authorization.metadata)
    end
  end

  context "when user has already metadata for socio but the old format" do
    let!(:user) { create(:user, organization: organization) }

    before do
      user.update!(extended_data: {
                     "socio_email" => socio_authorization.metadata["email"],
                     "socio_postal_code" => socio_authorization.metadata["postal_code"],
                     "socio_city" => socio_authorization.metadata["city"],
                     "socio_phone_number" => socio_authorization.metadata["phone_number"]
                   })

      subject.perform
      user.reload
    end

    it "duplicates encrypted metadata to user registration_metadata" do
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_authorization.metadata)
      expect(user.extended_data["data_authorization_handler"]).to eq(data_authorization.metadata)
    end
  end

  context "when user has already metadata for socio and data" do
    let!(:user) { create(:user, organization: organization) }

    before do
      user.update!(extended_data: {
                     "extended_socio_demographic_authorization_handler" => socio_authorization.metadata,
                     "data_authorization_handler" => data_authorization.metadata
                   })

      subject.perform
      user.reload
    end

    it "duplicates encrypted metadata to user registration_metadata" do
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_authorization.metadata)
      expect(user.extended_data["data_authorization_handler"]).to eq(data_authorization.metadata)
    end
  end
end
