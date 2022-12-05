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
      return Rails.cache.read(cache_key) if Rails.cache.read(cache_key).present?

      Rails.cache.fetch(cache_key, expires_in: 1.months) do
        JSON.dump(request)
      end
    end

    private

    def request
      https = Net::HTTP.new(url.host, url.port)
      https.use_ssl = true
      request = Net::HTTP::Get.new(url)
      response = https.request(request)

      features = JSON.parse(response.read_body).fetch("features", [])
      features.map do |feature|
        feature.fetch("properties", {}).fetch("name", nil)
      end

    rescue StandardError => e
      logger.warn("Error while fetching municipality names for postal code #{@postal_code}. Response code: #{response.code} with error #{e}")

      []
    end

    def cache_key
      "postal_code_autocomplete/#{@postal_code}"
    end

    def url
      @url ||= URI("https://api-adresse.data.gouv.fr/search/?q=#{@postal_code}&type=municipality")
    end
  end
end