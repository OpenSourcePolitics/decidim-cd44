require "uri"
require "net/http"

module Decidim
  class AddressAutocompleteApiController < DecidimController
    def postal_code_autocomplete
      render json: JSON.dump(municipality_names)
    end

    private

    def municipality_names
      return Rails.cache.read(cache_key) if Rails.cache.read(cache_key).present?

      Rails.cache.fetch(cache_key, expires_in: 1.months) do
        municipality_names_request
      end
    end

    def municipality_names_request
      https = Net::HTTP.new(url.host, url.port)
      https.use_ssl = true
      request = Net::HTTP::Get.new(url)
      response = https.request(request)

      features = JSON.parse(response.read_body).fetch("features", [])
      features.map do |feature|
        feature.fetch("properties", {}).fetch("name", nil)
      end

    rescue StandardError => e
      logger.warn("Error while fetching municipality names for postal code #{params[:postal_code]}. Response code: #{response.code} with error #{e}")

      []
    end

    def cache_key
      "postal_code_autocomplete/#{params[:postal_code]}"
    end

    def url
      @url ||= URI("https://api-adresse.data.gouv.fr/search/?q=#{params[:postal_code]}&type=municipality")
    end
  end
end