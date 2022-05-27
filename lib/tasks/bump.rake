# frozen_string_literal: true

namespace :bump do
  desc "Bump Decidim"
  task app: :environment do
    logger = Logger.new($stdout)

    logger.info("Installing ruby dependencies...")
    bundle = `bundle`
    logger.debug(bundle)
    yarn = `yarn install`
    logger.debug(yarn)
    if defined?(Decidim::DecidimAwesome)
      logger.info("Updating Decidim Awesome...")
      awesome_migrations = `bundle exec rails decidim_decidim_awesome:install:migrations`
      logger.debug(awesome_migrations)
      awesome_webpacker = `bundle exec rails decidim_decidim_awesome:webpacker:install`
      logger.debug(awesome_webpacker)
    end

    migrate = `bundle exec rake db:migrate`
    logger.debug(migrate)
  end
end
