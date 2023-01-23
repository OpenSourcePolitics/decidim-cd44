# frozen_string_literal: true

require "spec_helper"

describe "rake decidim:duplicates:metadata", type: :task do
  let!(:organization) { create(:organization) }
  let(:task_cmd) { :"decidim:duplicates:metadata" }

  let!(:user) { create(:user, organization: organization) }
  let(:socio_authorization) { create(:authorization, user: user, metadata: socio_metadata, name: "extended_socio_demographic_authorization_handler") }
  let(:data_authorization) { create(:authorization, user: user, metadata: data_metadata, name: "data_authorization_handler") }
  let!(:user2) { create(:user, organization: organization) }
  let(:socio_authorization_user2) { create(:authorization, user: user2, metadata: socio_metadata_user2, name: "extended_socio_demographic_authorization_handler") }
  let(:data_authorization_user2) { create(:authorization, user: user2, metadata: data_metadata_user2, name: "data_authorization_handler") }
  let(:socio_metadata) { { email: user.email, postal_code: "12345", city: "Barcelona", phone_number: "01234567889" } }
  let(:data_metadata) { { minmum_age: true, gdpr: true, zipcode: "12345" } }
  let(:socio_metadata_user2) { { email: user2.email, postal_code: "54321", city: "Paris", phone_number: "9876543210" } }
  let(:data_metadata_user2) { { minmum_age: true, gdpr: true, zipcode: "54321" } }

  context "when executing task" do
    it "exits with 0 code" do
      expect { Rake::Task[task_cmd].invoke }.to raise_error(SystemExit) do |error|
        expect(error.status).to eq(0)
      end
    end
  end

  context "when user has no metadata" do
    it "duplicates encrypted metadata to user registration_metadata" do
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to be_nil
      expect(user.extended_data["data_authorization_handler"]).to be_nil
      expect(user2.extended_data["extended_socio_demographic_authorization_handler"]).to be_nil
      expect(user2.extended_data["data_authorization_handler"]).to be_nil
      Rake::Task[task_cmd].invoke

      user.reload!
      user2.reload!
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata)
      expect(user.extended_data["data_authorization_handler"]).to eq(data_metadata)
      expect(user2.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata_user2)
      expect(user2.extended_data["data_authorization_handler"]).to eq(data_metadata_user2)
    end
  end

  context "when user has already metadata" do
    it "doesn't duplicates the useless metadata and duplicates the good ones" do
      user.update!(extended_data: { "extended_socio_demographic_authorization_handler" => socio_metadata })
      user2.update!(extended_data: { "data_authorization_handler" => data_metadata_user2 })
      Rake::Task[task_cmd].invoke
      expect(true).to eq(false)
      user.reload!
      user2.reload!
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata)
      expect(user.extended_data["data_authorization_handler"]).to eq(data_metadata)
      expect(user2.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata_user2)
      expect(user2.extended_data["data_authorization_handler"]).to eq(data_metadata_user2)
    end
  end

  context "when user has already metadata for socio but the old format" do
    it "remove the old format and add the new one" do
      user.update!(extended_data: {
        "socio_email" => socio_metadata["email"],
        "socio_postal_code" => socio_metadata["postal_code"],
        "socio_city" => socio_metadata["city"],
        "socio_phone_number" => socio_metadata["phone_number"]
      })

      Rake::Task[task_cmd].invoke

      user.reload!
      expect(user.extended_data["extended_socio_demographic_authorization_handler"]).to eq(socio_metadata)
      expect(user.extended_data).not_to include("socio_email")
      expect(user.extended_data).not_to include("socio_postal_code")
      expect(user.extended_data).not_to include("socio_city")
      expect(user.extended_data).not_to include("socio_phone_number")
    end
  end
end
