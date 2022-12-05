module Decidim
  class AddressAutocompleteApiController < DecidimController
    def postal_code_autocomplete
      render json: JSON.dump(Decidim::MunicipalityNamesService.for(params[:postal_code]))
    end
  end
end