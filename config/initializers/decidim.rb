# frozen_string_literal: true

Decidim.configure do |config|
  config.application_name = "Loire Atlantique"
  config.mailer_sender = "Loire Atlantique <ne-pas-repondre@opensourcepolitics.eu>"

  config.expire_session_after = ENV.fetch("DECIDIM_SESSION_TIMEOUT", 180).to_i.minutes

  if Rails.application.secrets.decidim[:session_timeout_interval].present?
    config.session_timeout_interval = Rails.application.secrets.decidim[:session_timeout_interval].to_i.seconds
  end

  config.unconfirmed_access_for = ENV.fetch("DECIDIM_UNCONFIRMED_ACCESS", 2).to_i.days unless Rails.env.test?
  config.skip_first_login_authorization = ENV["SKIP_FIRST_LOGIN_AUTHORIZATION"] ? ActiveRecord::Type::Boolean.new.cast(ENV.fetch("SKIP_FIRST_LOGIN_AUTHORIZATION", nil)) : true

  if Rails.env.production?
    config.default_locale = ENV.fetch("DEFAULT_LOCALE", "fr").to_sym
    config.available_locales = ENV.fetch("AVAILABLE_LOCALES", "fr,en").split(",").map(&:to_sym)
  else
    config.default_locale = ENV.fetch("DEFAULT_LOCALE", "en").to_sym
    config.available_locales = ENV.fetch("AVAILABLE_LOCALES", "en,fr").split(",").map(&:to_sym)
  end

  config.maximum_attachment_height_or_width = 6000

  # maps configuration
  # Use Here.com by default but fallback to nominatim for geocoding
  config.maps = {
    provider: :here,
    api_key: Rails.application.secrets.maps[:api_key],
    static: { url: "https://image.maps.ls.hereapi.com/mia/1.6/mapview" },
    geocoding: {
      host: "nominatim.openstreetmap.org",
      use_https: true
    },
    autocomplete: {
      address_format: [%w(houseNumber street), "city", "country"]
    }
  }

  # Custom resource reference generator method
  # config.resource_reference_generator = lambda do |resource, feature|
  #   # Implement your custom method to generate resources references
  #   "1234-#{resource.id}"
  # end

  # Currency unit
  config.currency_unit = Rails.application.secrets.decidim[:currency]

  # The number of reports which an object can receive before hiding it
  # config.max_reports_before_hiding = 3

  # Custom HTML Header snippets
  #
  # The most common use is to integrate third-party services that require some
  # extra JavaScript or CSS. Also, you can use it to add extra meta tags to the
  # HTML. Note that this will only be rendered in public pages, not in the admin
  # section.
  #
  # Before enabling this you should ensure that any tracking that might be done
  # is in accordance with the rules and regulations that apply to your
  # environment and usage scenarios. This feature also comes with the risk
  # that an organization's administrator injects malicious scripts to spy on or
  # take over user accounts.
  #
  config.enable_html_header_snippets = true

  # SMS gateway configuration
  #
  # If you want to verify your users by sending a verification code via
  # SMS you need to provide a SMS gateway service class.
  #
  # An example class would be something like:
  #
  # class MySMSGatewayService
  #   attr_reader :mobile_phone_number, :code
  #
  #   def initialize(mobile_phone_number, code)
  #     @mobile_phone_number = mobile_phone_number
  #     @code = code
  #   end
  #
  #   def deliver_code
  #     # Actual code to deliver the code
  #     true
  #   end
  # end
  #
  # config.sms_gateway_service = 'Decidim::Verifications::Sms::ExampleGateway'

  # Etherpad configuration
  #
  # Only needed if you want to have Etherpad integration with Decidim. See
  # Decidim docs at docs/services/etherpad.md in order to set it up.
  #

  if Rails.application.secrets.etherpad[:server].present?
    config.etherpad = {
      server: Rails.application.secrets.etherpad[:server],
      api_key: Rails.application.secrets.etherpad[:api_key],
      api_version: Rails.application.secrets.etherpad[:api_version]
    }
  end

  config.base_uploads_path = "#{ENV.fetch("HEROKU_APP_NAME", nil)}/" if ENV["HEROKU_APP_NAME"].present?

  config.minimum_time_to_sign_up = 1
end

Rails.application.config.i18n.available_locales = Decidim.available_locales
Rails.application.config.i18n.default_locale = Decidim.default_locale

# Inform Decidim about the assets folder
Decidim.register_assets_path File.expand_path("app/packs", Rails.application.root)
