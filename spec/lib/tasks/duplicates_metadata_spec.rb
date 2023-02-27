# frozen_string_literal: true

require "spec_helper"

describe "rake decidim:duplicates:metadata", type: :task do
  it "calls `Decidim::DuplicatesMetadata#perform`" do
    duplicates_metadata_instance = instance_double("Decidim::DuplicatesMetadata")
    allow(Decidim::DuplicatesMetadata).to receive(:new).and_return(duplicates_metadata_instance)
    allow(duplicates_metadata_instance).to receive(:perform)
    task.execute
    expect(duplicates_metadata_instance).to have_received(:perform)
  end
end
