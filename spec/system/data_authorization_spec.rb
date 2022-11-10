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
      click_button "Send"
    end

    shared_examples_for "is a valid phone number" do |phone|
      it "is a valid phone number: #{phone}" do
        expect(page).to have_content("successfully")
      end
    end

    context "when the phone number is equal to 0601010101" do
      let(:phone) { "0601010101" }

      it_behaves_like "is a valid phone number", "0601010101"
    end

    context "when the phone number is equal to 06 12 34 56 78" do
      let(:phone) { "06 12 34 56 78" }

      it_behaves_like "is a valid phone number", "06 12 34 56 78"
    end

    context "when the phone number is equal to 0033650065422" do
      let(:phone) { "0033650065422" }

      it_behaves_like "is a valid phone number", "0033650065422"
    end

    context "when the phone number is equal to +33650065422" do
      let(:phone) { "+33650065422" }

      it_behaves_like "is a valid phone number", "+33650065422"
    end

    it "authorizes the user" do
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

    shared_examples_for "is not a valid phone number" do |phone|
      it "is a valid phone number: #{phone}" do
        expect(page).to have_content("Your phone must contain 10 digits.")
      end
    end

    context "when the phone number is equal to 0012345678" do
      let(:phone) { "0012345678" }

      before do
        click_button "Send"
      end

      it_behaves_like "is not a valid phone number", "0012345678"
    end

    context "when the phone number is equal to 123456789a" do
      let(:phone) { "123456789a" }

      before do
        click_button "Send"
      end

      it_behaves_like "is not a valid phone number", "123456789a"
    end

    describe "when the name is empty" do
      let(:lastname) { "" }

      before do
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("error")
      end
    end

    describe "when the firstname is empty" do
      let(:firstname) { "" }

      before do
        click_button "Send"
      end

      it "does not authorize the user" do
        expect(page).to have_content("error")
      end
    end
  end
end
