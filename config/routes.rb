# frozen_string_literal: true

require "sidekiq/web"
require "sidekiq-scheduler/web"

Rails.application.routes.draw do
  authenticate :admin do
    mount Sidekiq::Web => "/sidekiq"
  end

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  mount Decidim::Core::Engine => "/"

  get "/postal-code-autocomplete/:postal_code", to: "decidim/address_autocomplete_api#postal_code_autocomplete"
  # mount Decidim::Map::Engine => '/map'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
