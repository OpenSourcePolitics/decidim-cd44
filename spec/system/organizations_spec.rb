# frozen_string_literal: true

require "spec_helper"

describe "Organizations", type: :system do
  let(:admin) { create(:admin) }

  shared_examples "form hiding advanced settings" do
    it "hides advanced settings" do
      expect(page).to have_content "Afficher les paramètres avancés"
      expect(page).not_to have_content "SMTP settings"
      expect(page).not_to have_content "Omniauth settings"
      expect(page).not_to have_content "File upload settings"
    end
  end

  context "when an admin authenticated" do
    before do
      login_as admin, scope: :admin
      visit decidim_system.root_path
    end

    describe "creating an organization" do
      before do
        click_link "Organizations"
        click_link "Nouvelle"
      end

      it_behaves_like "form hiding advanced settings"

      it "creates a new organization" do
        fill_in :organization_name, with: "Citizen Corp"
        fill_in :organization_host, with: "www.example.org"
        fill_in :organization_secondary_hosts, with: "foo.example.org\n\rbar.example.org"
        fill_in :organization_reference_prefix, with: "CCORP"
        fill_in :organization_organization_admin_name, with: "City Mayor"
        fill_in :organization_organization_admin_email, with: "mayor@example.org"
        check "organization_available_locales_fr"
        choose "organization_default_locale_fr"
        choose "Autoriser les utilisateurs à se créer un compte et à s'identifier"
        check "Procédure de partage de données (Direct)"
        click_button "Créer une organisation et inviter un administrateur"

        expect(page).to have_css("div.flash.success")
        expect(page).to have_content("Citizen Corp")
      end

      context "with invalid data" do
        it "does not create an organization" do
          fill_in :organization_name, with: "Bad"
          click_button "Créer une organisation et inviter un administrateur"

          expect(page).to have_content("Ce champ contient une erreur")
        end
      end
    end

    describe "showing an organization with different locale than user" do
      let!(:organization) do
        create(:organization, name: "Citizen Corp", default_locale: :fr, available_locales: ["fr"], description: { fr: "Un texte large" })
      end

      before do
        click_link "Organizations"
        within "table tbody" do
          first("tr").click_link "Citizen Corp"
        end
      end

      it "shows the organization data" do
        expect(page).to have_content("Citizen Corp")
        expect(page).to have_content("Un texte large")
      end
    end

    describe "editing an organization" do
      let!(:organization) { create(:organization, name: "Citizen Corp") }

      before do
        click_link "Organizations"
        within "table tbody" do
          first("tr").click_link "Modifier"
        end
      end

      it_behaves_like "form hiding advanced settings"

      it "edits the data" do
        fill_in :organization_name, with: "Citizens Rule!"
        fill_in :organization_host, with: "www.example.org"
        fill_in :organization_secondary_hosts, with: "foobar.example.org\n\rbar.example.org"
        choose "Ne pas autoriser les utilisateurs à s'inscrire, mais autoriser les utilisateurs existants à se connecter"
        check "Données personnelles (Direct)"

        click_button "Afficher les paramètres avancés"
        check "organization_omniauth_settings_facebook_enabled"

        click_button "Sauvegarder"

        expect(page).to have_css("div.flash.success")
        expect(page).to have_content("Citizens Rule!")
      end
    end

    describe "editing an organization with disabled OmniAuth provider" do
      let!(:organization) do
        create(:organization, name: "Citizen Corp", default_locale: :fr, available_locales: ["fr"], description: { fr: "Un texte large" })
      end

      before do
        secrets = Rails.application.secrets
        allow(Rails.application).to receive(:secrets).and_return(
          secrets.merge(
            omniauth: {
              facebook: {
                enabled: true,
                app_id: "fake-facebook-app-id",
                app_secret: "fake-facebook-app-secret"
              },
              twitter: {
                enabled: true,
                api_key: "fake-twitter-api-key",
                api_secret: "fake-twitter-api-secret"
              },
              google_oauth2: {
                enabled: true,
                client_id: "",
                client_secret: ""
              },
              developer: {
                enabled: false,
                icon: "phone"
              }
            }
          )
        )

        # Reload the UpdateOrganizationForm
        Decidim::System.send(:remove_const, :UpdateOrganizationForm)
        load "#{Decidim::System::Engine.root}/app/forms/decidim/system/update_organization_form.rb"

        click_link "Organizations"
        within "table tbody" do
          first("tr").click_link "Modifier"
        end

        click_button "Afficher les paramètres avancés"
      end

      after do
        # Reload the UpdateOrganizationForm
        Decidim::System.send(:remove_const, :UpdateOrganizationForm)
        load "#{Decidim::System::Engine.root}/app/forms/decidim/system/update_organization_form.rb"
      end

      it "displays all the available OmniAuth providers" do
        expect(page).to have_content("Developer")
      end
    end
  end
end
