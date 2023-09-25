# frozen_string_literal: true
# This migration comes from decidim_initiatives (originally 20220527130640)

class CreateDecidimInitiativesSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :decidim_initiatives_settings, if_not_exists: true do |t|
      t.string :initiatives_order, default: "random"
      t.references :decidim_organization, foreign_key: true, index: true
    end
  end
end
