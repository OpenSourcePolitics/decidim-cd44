# frozen_string_literal: true

require 'decidim/duplicates_metadata'

namespace :decidim do
  namespace :duplicates do
    desc "Merge all authorization encrypted metadata to decrypted metadata in user extended data"
    task metadata: :environment do
      Decidim::DuplicatesMetadata.new.perform
    end
  end
end
