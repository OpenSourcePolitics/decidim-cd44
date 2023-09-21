# frozen_string_literal: true

require "decidim_app/decidim_initiatives"

# Required to define the Decidim::Initiatives configurations
DecidimApp::DecidimInitiatives.apply_configuration if DecidimApp::DecidimInitiatives.decidim_initiatives_enabled?

if defined?(Decidim::Initiatives)
  Decidim::Initiatives::AdminEngine.routes do
    resources :initiatives_settings, only: [:edit, :update], controller: "initiatives_settings"
  end

  Decidim.resource_registry.find(:initiatives_type).actions += ["create"]

  Decidim::Initiatives::Engine.routes do
    resources :initiatives, param: :slug, only: [:index, :show, :edit, :update], path: "initiatives" do
      resources :initiative_signatures

      member do
        get :authorization_create_modal, to: "authorization_create_modals#show"
      end
    end
  end
end
