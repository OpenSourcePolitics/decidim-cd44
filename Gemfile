# frozen_string_literal: true

source "https://rubygems.org"

DECIDIM_VERSION = "0.27"
DECIDIM_BRANCH = "release/#{DECIDIM_VERSION}-stable".freeze

ruby RUBY_VERSION

# Many gems depend on environment variables, so we load them as soon as possible
gem "dotenv-rails", require: "dotenv/rails-now"

gem "decidim", "~> #{DECIDIM_VERSION}.0"
gem "decidim-initiatives", "~> #{DECIDIM_VERSION}.0"

gem "acts_as_textcaptcha", "~> 4.6.0"
gem "decidim-budgets_booth", github: "Pipeline-to-Power/decidim-module-ptp", branch: "main"
gem "decidim-budgets_importer", git: "https://github.com/OpenSourcePolitics/decidim-module-budgets_importer.git"
gem "decidim-budgets_paper_ballots", git: "https://github.com/armandfardeau/decidim-module-budgets_paper_ballots"
gem "decidim-cache_cleaner"
gem "decidim-decidim_awesome", "~> 0.9.1"
gem "decidim-extended_socio_demographic_authorization_handler", git: "https://github.com/OpenSourcePolitics/decidim-module-extended_socio_demographic_authorization_handler",
                                                                branch: DECIDIM_BRANCH
gem "decidim-friendly_signup", git: "https://github.com/OpenSourcePolitics/decidim-module-friendly_signup", branch: "bump/fast_sign_up_branch"
gem "decidim-question_captcha", git: "https://github.com/OpenSourcePolitics/decidim-module-question_captcha.git", branch: DECIDIM_BRANCH
gem "decidim-simple_proposal", git: "https://github.com/opensourcepolitics/decidim-module-simple_proposal.git", branch: "fix/0.27_scope_picker_override"
gem "decidim-spam_detection", "4.0.0"
gem "decidim-term_customizer", git: "https://github.com/armandfardeau/decidim-module-term_customizer.git", branch: "fix/precompile-on-docker-0.27"

# Omniauth gems
gem "omniauth-publik", git: "https://github.com/OpenSourcePolitics/omniauth-publik"

# Default
gem "activejob-uniqueness", require: "active_job/uniqueness/sidekiq_patch"
gem "aws-sdk-s3", require: false
gem "bootsnap", "~> 1.4"
gem "deface"
gem "faker", "~> 2.14"
gem "fog-aws"
gem "foundation_rails_helper", git: "https://github.com/sgruhier/foundation_rails_helper.git"
gem "letter_opener_web", "~> 1.3"
gem "nokogiri", "1.13.4"
gem "omniauth-rails_csrf_protection", "~> 1.0"
gem "puma", ">= 5.5.1"
gem "rack-attack", "~> 6.6"
gem "sys-filesystem"

group :development do
  gem "listen", "~> 3.1"
  gem "rubocop-faker"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "4.0.4"
end

group :development, :test do
  gem "brakeman", "~> 5.1"
  gem "byebug", "~> 11.0", platform: :mri
  gem "climate_control", "~> 1.2"
  gem "decidim-dev", "~> #{DECIDIM_VERSION}.0"
  gem "parallel_tests"
end

group :production do
  gem "dalli"
  gem "health_check", "~> 3.1"
  gem "lograge"
  gem "sendgrid-ruby"
  gem "sentry-rails"
  gem "sentry-ruby"
  gem "sentry-sidekiq"
  gem "sidekiq", "~> 6.0"
  gem "sidekiq_alive", "~> 2.2"
  gem "sidekiq-scheduler", "~> 5.0"
end
