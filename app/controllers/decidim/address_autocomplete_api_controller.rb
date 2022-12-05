# frozen_string_literal: true

module Decidim
  class AddressAutocompleteApiController < DecidimController
    def postal_code_autocomplete
      render json: Decidim::MunicipalityNamesService.for(params[:postal_code])
    end
  end
end
