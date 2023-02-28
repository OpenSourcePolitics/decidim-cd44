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
           metadata: { "email" => "user@example.org", "postal_code" => "12345", "city" => "Barcelona", "phone_number" => "01234567889" },
           name: "extended_socio_demographic_authorization_handler")
  end
  let!(:socio_authorization_user2) do
    create(:authorization,
           user: user2,
           metadata: { "email" => "user2@example.org", "postal_code" => "54321", "city" => "Paris", "phone_number" => "9876543210" },
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

  it "has :authorizations attr_reader" do
    expect(subject.authorizations.count).to eq(4)
  end

  describe "#perform" do
    it "updates users extended_data" do
      expect(user.extended_data).not_to include("extended_socio_demographic_authorization_handler", "data_authorization_handler")
      expect(user2.extended_data).not_to include("extended_socio_demographic_authorization_handler", "data_authorization_handler")

      subject.perform
      user.reload
      user2.reload

      expect(user.extended_data).to include(
        "extended_socio_demographic_authorization_handler" => socio_authorization.metadata,
        "data_authorization_handler" => data_authorization.metadata
      )

      expect(user2.extended_data).to include(
        "extended_socio_demographic_authorization_handler" => socio_authorization_user2.metadata,
        "data_authorization_handler" => data_authorization_user2.metadata
      )
    end

    context "when user already has metadata" do
      let!(:user) { create(:user, organization: organization, extended_data: user_extended_data) }
      let(:user_extended_data) do
        { "extended_socio_demographic_authorization_handler" =>
            { "email" => "user@example.org", "postal_code" => "12345",
              "city" => "Barcelona", "phone_number" => "01234567889" } }
      end

      it "duplicates non existing authorization metadata" do
        expect(user.extended_data).to include(user_extended_data)
        expect(user.extended_data.keys.count).to eq(1)

        subject.perform
        user.reload
        expect(user.extended_data).to include(user_extended_data, "data_authorization_handler" => data_authorization.metadata)
        expect(user.extended_data.keys.count).to eq(2)
      end

      context "and metadata already contains AH metadata" do
        let(:user_extended_data) do
          {
            "extended_socio_demographic_authorization_handler" => {},
            "data_authorization_handler" => {}
          }
        end

        it "skip this user" do
          expect do
            subject.perform
            user.reload
          end.not_to change(user, :extended_data)
        end
      end

      context "and metadata contains legacy format" do
        let(:user_extended_data) do
          {
            "socio_email" => "example@decidim.org",
            "socio_postal_code" => "75002",
            "socio_city" => "Paris",
            "socio_phone_number" => "01234567889"
          }
        end

        it "duplicates non existing authorization metadata" do
          subject.perform
          user.reload
          expect(user.extended_data).to include("extended_socio_demographic_authorization_handler" => socio_authorization.metadata)
        end

        it "removes legacy metadata" do
          expect do
            subject.perform
            user.reload
          end.to change(user, :extended_data)
            .from(user_extended_data)
            .to({
                  "data_authorization_handler" => data_authorization.metadata,
                  "extended_socio_demographic_authorization_handler" => socio_authorization.metadata
                })
        end
      end
    end

    context "when there is no authorizations" do
      before do
        Decidim::Authorization.destroy_all
      end

      it "does not update user" do
        expect do
          subject.perform
          user.reload
        end.not_to change(user, :extended_data)

        expect(subject.authorizations.count).to eq(0)
      end
    end
  end
end
