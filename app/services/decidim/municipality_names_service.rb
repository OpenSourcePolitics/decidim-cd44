require "uri"
require "net/http"
require 'json'

module Decidim
  class MunicipalityNamesService
    def initialize(postal_code)
      @postal_code = postal_code
    end

    def self.for(postal_code)
      new(postal_code).call
    end

    def call
      # When the api doesn't return a valid response, we return an empty array
      # Therefore we don't want to cache this response
      # We also don't want to cache the response when the postal code is invalid or empty
      return Rails.cache.read(cache_key) if Rails.cache.read(cache_key).present?

      Rails.cache.fetch(cache_key, expires_in: 1.months) do
        JSON.dump(parsed_response(request))
      end
    end

    private

    def request
      https = Net::HTTP.new(url.host, url.port)
      https.use_ssl = true
      request = Net::HTTP::Get.new(url)
      response = https.request(request)
      response.read_body

    rescue StandardError => e
      Rails.logger.warn("Error while fetching municipality names for postal code #{@postal_code} with error #{e}")

      "{}"
    end

    def parsed_response(body)
      features = JSON.parse(body).fetch("features", [])
      features.map do |feature|
        feature.fetch("properties", {}).fetch("name", nil)
      end.compact
    end

    def cache_key
      "postal_code_autocomplete/#{@postal_code}"
    end

    def url
      @url ||= URI("https://api-adresse.data.gouv.fr/search/?q=#{@postal_code}&type=municipality")
    end
  end
end