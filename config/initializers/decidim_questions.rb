# frozen_string_literal: true

if defined?(Decidim::QuestionCaptcha)
  if Rails.application.secrets.question_captcha[:host].present?
    Decidim::QuestionCaptcha.configure do |config|
      config.api_endpoint = "https://#{Rails.application.secrets.question_captcha[:host]}/"
    end
  else
    Rails.logger.warn("You must define the env var 'QUESTION_CAPTCHA_HOST' to activate question captcha")
  end
end
