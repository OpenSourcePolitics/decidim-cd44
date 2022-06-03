# frozen_string_literal: true

namespace :bump do
  desc "Bump Decidim"
  task app: :environment do
    logger = Logger.new($stdout)

    logger.info("Installing ruby dependencies...")
    bundle = `bundle`
    logger.debug(bundle)
    if defined?(Decidim::DecidimAwesome)
      logger.info("Updating Decidim Awesome...")
      awesome_migrations = `bundle exec rails decidim_decidim_awesome:install:migrations`
      logger.debug(awesome_migrations)
      awesome_webpacker = `bundle exec rails decidim_decidim_awesome:webpacker:install`
      logger.debug(awesome_webpacker)
    end

    if defined?(Decidim::TermCustomizer)
      logger.info("Updating Decidim TermCustomizer...")
      tcustomizer_migrations = `bundle exec rails decidim_term_customizer:install:migrations`
      logger.debug(tcustomizer_migrations)
    end

    if defined?(Decidim::SimpleProposal)
      logger.info("Updating Decidim SimpleProposal...")
      simple_proposal_migrations = `bundle exec rake decidim_simple_proposal:install:migrations`
      logger.debug(simple_proposal_migrations)
    end

    logger.info("Installing yarn dependencies...")
    `yarn install`
    logger.info("Precompiling assets...")
    `bundle exec rake assets:precompile`
    migrate = `bundle exec rake db:migrate`
    logger.debug(migrate)
  end
end
