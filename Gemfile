# frozen_string_literal: true

source "https://rubygems.org"

DECIDIM_VERSION = "release/0.26-stable"

ruby RUBY_VERSION

gem "decidim", git: "https://github.com/decidim/decidim.git", branch: DECIDIM_VERSION
gem "decidim-initiatives", git: "https://github.com/decidim/decidim.git", branch: DECIDIM_VERSION

gem "acts_as_textcaptcha", "~> 4.5.1"
gem "decidim-budgets_importer", git: "https://github.com/OpenSourcePolitics/decidim-module-budgets_importer.git"
gem "decidim-budgets_paper_ballots", git: "https://github.com/digidemlab/decidim-module-budgets_paper_ballots", branch: "release/0.26-stable"
gem "decidim-decidim_awesome", "~> 0.8.3"
gem "decidim-extended_socio_demographic_authorization_handler", git: "https://github.com/OpenSourcePolitics/decidim-module-extended_socio_demographic_authorization_handler"
gem "decidim-friendly_signup", git: "https://github.com/OpenSourcePolitics/decidim-module-friendly_signup", branch: "main"
gem "decidim-question_captcha", git: "https://github.com/OpenSourcePolitics/decidim-module-question_captcha.git"
gem "decidim-simple_proposal", git: "https://github.com/OpenSourcePolitics/decidim-module-simple_proposal.git", branch: "fix/0.26-proposal-form"
gem "decidim-spam_detection", "2.0.0"
gem "decidim-term_customizer", git: "https://github.com/mainio/decidim-module-term_customizer.git", branch: "release/0.26-stable"

gem "dotenv-rails"

gem "bootsnap", "~> 1.4"
gem "deface"
gem "foundation_rails_helper", git: "https://github.com/sgruhier/foundation_rails_helper.git"

gem "puma", ">= 5.5.1"

gem "faker", "~> 2.14"

gem "activejob-uniqueness", require: "active_job/uniqueness/sidekiq_patch"
gem "fog-aws"
gem "rack-attack", "~> 6.6"
gem "sys-filesystem"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "brakeman", "~> 5.1"
  gem "decidim-dev", git: "https://github.com/decidim/decidim.git", branch: DECIDIM_VERSION
end

group :development do
  gem "letter_opener_web", "~> 1.3"
  gem "listen", "~> 3.1"
  gem "rubocop-faker"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "4.0.4"
end

group :production do
  gem "dalli"
  gem "lograge"
  gem "newrelic_rpm"
  gem "passenger"
  gem "sendgrid-ruby"
  gem "sentry-rails"
  gem "sentry-ruby"
  gem "sentry-sidekiq"
  gem "sidekiq", "6.4.2"
  gem "sidekiq-scheduler"
end
