# frozen_string_literal: true

require "spec_helper"

def fill_registration_form
  fill_in :registration_user_name, with: "Nikola Tesla"
  fill_in :registration_user_email, with: "nikola.tesla@example.org"
  fill_in :registration_user_password, with: "sekritpass123"
  fill_in :registration_user_textcaptcha_answer, with: "100"
end

describe "Registration", type: :system do
  let(:organization) { create(:organization, default_locale: "en") }
  let!(:terms_and_conditions_page) { Decidim::StaticPage.find_by(slug: "terms-and-conditions", organization: organization) }

  before do
    switch_to_host(organization.host)
    visit decidim.new_user_registration_path
  end

  context "when signing up" do
    describe "on first sight" do
      it "shows fields empty" do
        expect(page).to have_content("Sign up to participate")
        expect(page).to have_field("registration_user_name", with: "")
        expect(page).to have_field("registration_user_email", with: "")
        expect(page).to have_field("registration_user_password", with: "")
        expect(page).to have_field("registration_user_textcaptcha_answer", with: "")
        expect(page).to have_field("registration_user_newsletter", checked: false)
      end
    end

    context "when signing up too fast" do
      before do
        allow(Decidim.config).to receive(:minimum_time_to_sign_up).and_return(10)
      end

      it "show an error modal" do
        fill_registration_form
        page.check("registration_user_newsletter")
        check :registration_user_tos_agreement
        within "form.new_user" do
          find("*[type=submit]").click
        end
        expect(page).to have_content("You have completed the sign up form too fast")
      end
    end

    context "when signing up slowly enough" do
      before do
        allow(Decidim.config).to receive(:minimum_time_to_sign_up).and_return(0)
      end

      it "signs you up" do
        fill_registration_form
        page.check("registration_user_newsletter")
        check :registration_user_tos_agreement
        within "form.new_user" do
          find("*[type=submit]").click
        end
        expect(page).to have_content("A message with a confirmation link")
      end
    end
  end

  context "when newsletter checkbox is unchecked" do
    before do
      allow(Decidim.config).to receive(:minimum_time_to_sign_up).and_return(0)
    end

    it "opens modal on submit" do
      within "form.new_user" do
        find("*[type=submit]").click
      end
      expect(page).to have_css("#sign-up-newsletter-modal", visible: :visible)
      expect(page).to have_current_path decidim.new_user_registration_path
    end

    it "checks when clicking the checking button" do
      within "form.new_user" do
        find("*[type=submit]").click
      end
      click_button "Check and continue"
      expect(page).to have_css("#sign-up-newsletter-modal", visible: :all)
      expect(page).to have_field("registration_user_newsletter", checked: true)
    end

    it "submit after modal has been opened and selected an option" do
      within "form.new_user" do
        find("*[type=submit]").click
      end
      click_button "Keep unchecked"
      expect(page).to have_css("#sign-up-newsletter-modal", visible: :all)
      fill_registration_form
      sleep 1
      within "form.new_user" do
        find("*[type=submit]").click
      end
      expect(page).to have_current_path decidim.user_registration_path
      expect(page).to have_field("registration_user_newsletter", checked: false)
    end
  end

  context "when newsletter checkbox is checked but submit fails" do
    before do
      fill_registration_form
      page.check("registration_user_newsletter")
      sleep 1
    end

    it "keeps the user newsletter checkbox true value" do
      within "form.new_user" do
        find("*[type=submit]").click
      end
      expect(page).to have_current_path decidim.user_registration_path
      expect(page).to have_field("registration_user_newsletter", checked: true)
    end
  end
end
