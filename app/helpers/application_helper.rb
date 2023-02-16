# frozen_string_literal: true

module ApplicationHelper
  include Decidim::LayoutHelper

  def render_helpscout_beacon(side)
    return if helpscout_beacon_id(side).blank?

    render_beacon(side, :main) if helpscout_beacon_id(side, :fallback).blank?

    main_locale? ? render_beacon(side, :main) : render_beacon(side, :fallback)
  end

  private

  def helpscout_beacon_id(side, type = :main)
    Rails.application.secrets.dig(:helpscout, side, type)
  end

  def render_beacon(side, type)
    render partial: "support/beacon", locals: {
      beacon_id: helpscout_beacon_id(side, type)
    }
  end

  def main_locale?
    current_locale.to_sym == I18n.default_locale
  end
end
