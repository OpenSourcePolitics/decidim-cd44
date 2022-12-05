# frozen_string_literal: true

require "spec_helper"

describe Decidim::AddressAutocompleteApiController, type: :controller do
  let(:postal_code) { "08001" }

  before do
    allow(Decidim::MunicipalityNamesService).to receive(:for).with(postal_code).and_return(["NoWhereLand"])
  end

  it "returns a json" do
    get :postal_code_autocomplete, params: { postal_code: postal_code }

    expect(response).to have_http_status(:ok)
  end
end