# frozen_string_literal: true

namespace :decidim do
  namespace :duplicates do
    desc "Merge all authorization encrypted metadata to decrypted metadata in user extended data"
    task metadata: :environment do
      Decidim::DuplicatesMetadata.new.perform
    end
  end
end
