# frozen_string_literal: true

if defined?(Decidim::QuestionCaptcha)
  Decidim::QuestionCaptcha.configure do |config|
    if Rails.application.secrets.question_captcha[:host].present?
      config.api_endpoint = "https://#{Rails.application.secrets.question_captcha[:host]}/"
    else
      config.perform_textcaptcha = false
      Rails.logger.warn("You must define the env var 'QUESTION_CAPTCHA_HOST' to activate question captcha")
    end
  end
end
