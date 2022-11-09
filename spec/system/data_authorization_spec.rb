# frozen_string_literal: true

require "spec_helper"

describe "Data authorization", type: :system do
  let(:organization) { create(:organization, available_authorizations: ["data_authorization_handler"]) }
  let(:user) { create(:user, :confirmed, organization: organization) }
  let(:firstname) { "John" }
  let(:lastname) { "Doe" }
  let(:phone) { "0605040302" }
  let(:structure) { "My company" }

  before do
    switch_to_host(organization.host)
    login_as user, scope: :user
    visit decidim_verifications.authorizations_path
    click_link("Data Sharing Process")
  end

  it "can be authorized" do
    expect(page).to have_content("Data Sharing Process")
  end

  context "when the form is filled in correctly" do
    before do
      switch_to_host(organization.host)
      login_as user, scope: :user
      visit decidim_verifications.authorizations_path
      click_link("Data Sharing Process")
      fill_in :authorization_handler_firstname, with: firstname
      fill_in :authorization_handler_lastname, with: lastname
      fill_in :authorization_handler_phone, with: phone
      fill_in :authorization_handler_structure, with: structure
      check :authorization_handler_gdpr
      click_button "Send"
    end

    it "authorizes the user" do
      # Check if 0605040302 match /\A0[1-9]\d{8}\z/
      puts "AAAAAA"
      puts phone.match(/\A0[1-9]\d{8}\z/)
      expect(page).to have_content("successfully")
    end
  end

  context "when the form is filled in incorrectly" do
    before do
      fill_in :authorization_handler_firstname, with: firstname
      fill_in :authorization_handler_lastname, with: lastname
      fill_in :authorization_handler_phone, with: phone
      fill_in :authorization_handler_structure, with: structure
    end

    describe "when the gdpr checkbox is not checked" do
      before do
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("must be accepted")
      end
    end

    describe "when the phone number is not valid" do
      before do
        fill_in :authorization_handler_phone, with: "123"
        check :authorization_handler_gdpr
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("Your phone must contain 10 digits and match 0601010101.")
      end
    end

    describe "when the phone number starts with 00" do
      before do
        fill_in :authorization_handler_phone, with: "0012345678"
        check :authorization_handler_gdpr
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("Your phone must contain 10 digits and match 0601010101.")
      end
    end

    describe "when the phone number contains letters" do
      before do
        fill_in :authorization_handler_phone, with: "123456789a"
        check :authorization_handler_gdpr
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("Your phone must contain 10 digits and match 0601010101.")
      end
    end

    describe "when the name is empty" do
      before do
        fill_in :authorization_handler_firstname, with: ""
        check :authorization_handler_gdpr
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("error")
      end
    end

    describe "when the firstname is empty" do
      before do
        fill_in :authorization_handler_firstname, with: ""
        check :authorization_handler_gdpr
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("error")
      end
    end
  end
end
