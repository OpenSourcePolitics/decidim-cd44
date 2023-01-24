# frozen_string_literal: true

require "spec_helper"

module Decidim
  describe MunicipalityNamesService do
    let(:postal_code) { "08001" }

    let(:response_body) do
      JSON.dump({
                  features: [
                    {
                      properties: {
                        name: "Barcelona"
                      }
                    }
                  ]
                })
    end

    let(:unparseable_response_body) do
      JSON.dump({
                  features: [
                    {
                      properties: {
                        missLabeled: "Barcelona"
                      }
                    }
                  ]
                })
    end

    let(:stubbed_request) do
      stub_request(:get, "https://api-adresse.data.gouv.fr/search/?q=#{postal_code}&type=municipality").with(
        headers: {
          "Accept" => "*/*",
          "Accept-Encoding" => "gzip;q=1.0,deflate;q=0.6,identity;q=0.3",
          "Host" => "api-adresse.data.gouv.fr",
          "User-Agent" => "Ruby"
        }
      )
    end

    before do
      Rails.cache.clear
    end

    describe ".for" do
      context "when postal code is valid" do
        before do
          stubbed_request.to_return(status: 200, body: response_body, headers: {})
        end

        it "returns a list of municipality names" do
          expect(described_class.for(postal_code)).to eq("[\"Barcelona\"]")
        end

        context "when called twice" do
          it "returns the cache entry" do
            expect(Rails.cache.read(postal_code)).to eq(nil)
            described_class.for(postal_code)
            expect(Rails.cache.read("postal_code_autocomplete/#{postal_code}")).to eq("[\"Barcelona\"]")
          end
        end
      end

      context "when postal code is not valid" do
        let(:postal_code) { "08002" }

        before do
          stubbed_request.to_raise(StandardError)
        end

        it "returns an empty json array" do
          expect(described_class.for(postal_code)).to eq("[]")
        end
      end

      context "when api response in unparseable" do
        let(:postal_code) { "08003" }

        before do
          stubbed_request.to_return(status: 200, body: unparseable_response_body, headers: {})
        end

        it "returns an empty json array" do
          expect(described_class.for(postal_code)).to eq("[]")
        end
      end
    end
  end
end
