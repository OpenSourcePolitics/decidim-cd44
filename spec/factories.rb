# frozen_string_literal: true

require "decidim/core/test/factories"
require "decidim/proposals/test/factories"
require "decidim/debates/test/factories"
require "decidim/meetings/test/factories"
require "decidim/accountability/test/factories"
require "decidim/system/test/factories"
require "decidim/participatory_processes/test/factories"
require "decidim/initiatives/test/factories"

FactoryBot.modify do
  factory :initiatives_type, class: "Decidim::InitiativesType" do
    title { generate_localized_title }
    description { Decidim::Faker::Localized.wrapped("<p>", "</p>") { generate_localized_title } }
    organization
    # Keep banner_image after organization
    banner_image do
      ActiveStorage::Blob.create_and_upload!(
        io: File.open(Decidim::Dev.test_file("city2.jpeg", "image/jpeg")),
        filename: "city2.jpeg",
        content_type: "image/jpeg"
      ).signed_id
    end
    signature_type { :online }
    attachments_enabled { true }
    undo_online_signatures_enabled { true }
    custom_signature_end_date_enabled { false }
    area_enabled { false }
    promoting_committee_enabled { true }
    minimum_committee_members { 3 }
    child_scope_threshold_enabled { false }
    only_global_scope_enabled { false }
    comments_enabled { true }

    trait :with_comments_disabled do
      comments_enabled { false }
    end

    trait :attachments_enabled do
      attachments_enabled { true }
    end

    trait :attachments_disabled do
      attachments_enabled { false }
    end

    trait :online_signature_enabled do
      signature_type { :online }
    end

    trait :online_signature_disabled do
      signature_type { :offline }
    end

    trait :undo_online_signatures_enabled do
      undo_online_signatures_enabled { true }
    end

    trait :undo_online_signatures_disabled do
      undo_online_signatures_enabled { false }
    end

    trait :custom_signature_end_date_enabled do
      custom_signature_end_date_enabled { true }
    end

    trait :custom_signature_end_date_disabled do
      custom_signature_end_date_enabled { false }
    end

    trait :area_enabled do
      area_enabled { true }
    end

    trait :area_disabled do
      area_enabled { false }
    end

    trait :promoting_committee_enabled do
      promoting_committee_enabled { true }
    end

    trait :promoting_committee_disabled do
      promoting_committee_enabled { false }
      minimum_committee_members { 0 }
    end

    trait :with_user_extra_fields_collection do
      collect_user_extra_fields { true }
      extra_fields_legal_information { Decidim::Faker::Localized.wrapped("<p>", "</p>") { generate_localized_title } }
      document_number_authorization_handler { "dummy_authorization_handler" }
    end

    trait :with_sms_code_validation do
      validate_sms_code_on_votes { true }
    end

    trait :child_scope_threshold_enabled do
      child_scope_threshold_enabled { true }
    end

    trait :only_global_scope_enabled do
      only_global_scope_enabled { true }
    end
  end
end
