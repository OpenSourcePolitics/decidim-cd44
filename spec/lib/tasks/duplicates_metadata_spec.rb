# frozen_string_literal: true

require "spec_helper"

describe "rake decidim:duplicates:metadata", type: :task do
  let!(:organization) { create(:organization) }
  let(:task_cmd) { :"decidim:duplicates:metadata" }

  let!(:user) { create(:user, organization: organization) }
  let(:authorization) { create(:authorization, user: user, metadata: metadata) }
  let!(:user2) { create(:user, organization: organization) }
  let(:authorization_user2) { create(:authorization, user: user2, metadata: metadata_user2) }
  let(:metadata) { { email: user.email } }
  let(:metadata_user2) { { email: user2.email } }

  context "when executing task" do
    it "exits with 0 code" do
      expect { Rake::Task[task_cmd].invoke }.to raise_error(SystemExit) do |error|
        expect(error.status).to eq(0)
      end
    end

    it "duplicates encrypted metadata to user registration_metadata" do
      expect(user.extended_data).to eq({})
      expect(user2.extended_data).to eq({})
      Rake::Task[task_cmd].invoke

      user.reload!
      user2.reload!
      expect(user.extended_data).to eq(metadata)
      expect(user2.extended_data).to eq(metadata_user2)
    end
  end
end
