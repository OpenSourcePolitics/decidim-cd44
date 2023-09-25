# frozen_string_literal: true

require "spec_helper"

module Decidim::Verifications
  describe RevokeAllAuthorizations do
    subject { described_class.new(organization, current_user) }

    let(:organization) { create(:organization) }
    let(:now) { Time.zone.now }
    let(:prev_week) { Time.zone.today.prev_week }
    let(:all_authorizations) do
      Decidim::Verifications::Authorizations.new(
        organization: organization
      ).query
    end
    let(:granted_authorizations) do
      Decidim::Verifications::Authorizations.new(
        organization: organization,
        granted: true
      ).query
    end
    let(:no_granted_authorizations) do
      Decidim::Verifications::Authorizations.new(
        organization: organization,
        granted: false
      ).query
    end
    let!(:current_user) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data) }
    let!(:user0) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data) }
    let!(:user1) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data) }
    let!(:user2) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data) }
    let!(:user3) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data) }
    let!(:user4) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data) }
    let!(:user5) { create(:user, :admin, :confirmed, organization: organization, extended_data: extended_data, managed: true) }

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
    # With 6 authorizations, 3 granted, 2 pending, only 1 granted & managed

    context "when authorization is a ExtendedSocioDemographic" do
      before do
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "extended_socio_demographic_authorization_handler", user: user0)
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "extended_socio_demographic_authorization_handler", user: user1)
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "extended_socio_demographic_authorization_handler", user: user2)
        create(:authorization, created_at: prev_week, granted_at: nil, name: "extended_socio_demographic_authorization_handler", user: user3)
        create(:authorization, created_at: prev_week, granted_at: nil, name: "extended_socio_demographic_authorization_handler", user: user4)
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "extended_socio_demographic_authorization_handler", user: user5)
      end

      describe "When creating a revoke all authorizations command" do
        context "with organization not set" do
          subject { described_class.new(nil, current_user) }

          it "is not valid" do
            expect { subject.call }.to broadcast(:invalid)
          end
        end
      end

      describe "With 4 granted auths and 2 ungranted auths" do
        context "when destroy all granted auths" do
          it "doesn't destroy any ungranted auth" do
            expect do
              subject.call
            end.not_to change(no_granted_authorizations, :count)
          end

          it "destroy all granted auths" do
            expect do
              subject.call
            end.to change(granted_authorizations, :count).from(4).to(0)
          end

          it "broadcasts ok" do
            expect { subject.call }.to broadcast(:ok)
          end

          it "traces the action", versioning: true do
            granted_authorizations.find_each do |auth|
              expect(Decidim.traceability)
                .to receive(:perform_action!)
                .with(:destroy, auth, current_user)
                .and_call_original
            end
            expect { subject.call }.to change(Decidim::ActionLog, :count)
            action_log = Decidim::ActionLog.last
            expect(action_log.version).to be_present
          end

          it "removes metadata in user extended data" do
            expect(user0.extended_data).to eq(extended_data)
            expect(user1.extended_data).to eq(extended_data)
            subject.call

            user0.reload
            user1.reload
            expect(user0.extended_data).to include("extra_data")
            expect(user0.extended_data).not_to include("extended_socio_demographic_authorization_handler")
            expect(user1.extended_data).to include("extra_data")
            expect(user1.extended_data).not_to include("extended_socio_demographic_authorization_handler")
          end
        end
      end
    end

    context "when authorization is a Data" do
      before do
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "data_autorization_handler", user: user0)
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "data_autorization_handler", user: user1)
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "data_autorization_handler", user: user2)
        create(:authorization, created_at: prev_week, granted_at: nil, name: "data_autorization_handler", user: user3)
        create(:authorization, created_at: prev_week, granted_at: nil, name: "data_autorization_handler", user: user4)
        create(:authorization, created_at: prev_week, granted_at: prev_week, name: "data_autorization_handler", user: user5)
      end

      describe "When creating a revoke all authorizations command" do
        context "with organization not set" do
          subject { described_class.new(nil, current_user) }

          it "is not valid" do
            expect { subject.call }.to broadcast(:invalid)
          end
        end
      end

      describe "With 4 granted auths and 2 ungranted auths" do
        context "when destroy all granted auths" do
          it "doesn't destroy any ungranted auth" do
            expect do
              subject.call
            end.not_to change(no_granted_authorizations, :count)
          end

          it "destroy all granted auths" do
            expect do
              subject.call
            end.to change(granted_authorizations, :count).from(4).to(0)
          end

          it "broadcasts ok" do
            expect { subject.call }.to broadcast(:ok)
          end

          it "traces the action", versioning: true do
            granted_authorizations.find_each do |auth|
              expect(Decidim.traceability)
                .to receive(:perform_action!)
                .with(:destroy, auth, current_user)
                .and_call_original
            end
            expect { subject.call }.to change(Decidim::ActionLog, :count)
            action_log = Decidim::ActionLog.last
            expect(action_log.version).to be_present
          end

          it "removes metadata in user extended data" do
            expect(user0.extended_data).to eq(extended_data)
            expect(user1.extended_data).to eq(extended_data)
            subject.call

            user0.reload
            user1.reload
            expect(user0.extended_data).to include("extra_data")
            expect(user0.extended_data).not_to include("data_autorization_handler")
            expect(user1.extended_data).to include("extra_data")
            expect(user1.extended_data).not_to include("data_autorization_handler")
          end
        end
      end
    end

    context "when authorization is not a ExtendedSocioDemographicAuthorizationHandler or a DataAuthorizationHandler" do
      before do
        create(:authorization, created_at: prev_week, granted_at: prev_week, user: user0)
        create(:authorization, created_at: prev_week, granted_at: prev_week, user: user1)
        create(:authorization, created_at: prev_week, granted_at: prev_week, user: user2)
        create(:authorization, created_at: prev_week, granted_at: nil, user: user3)
        create(:authorization, created_at: prev_week, granted_at: nil, user: user4)
        create(:authorization, created_at: prev_week, granted_at: prev_week, user: user5)
      end

      it "doesn't clear user extended data" do
        expect { subject.call }.not_to change(user0, :extended_data)
      end
    end
  end
end
