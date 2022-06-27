# Overrides

## Fix meetings orders in indexes
* `app/controllers/decidim/meetings/meetings_controller.rb`
* `app/controllers/decidim/meetings/directory/meetings_controller.rb`
##  Fix meetings registration serializer
* `app/serializers/decidim/meetings/registration_serializer.rb`
## Fix UserAnswersSerializer for CSV exports
* `lib/decidim/forms/user_answers_serializer.rb`
## 28c8d74 - Add basic tests to reference package (#1), 2021-07-26
* `lib/extends/commands/decidim/admin/create_participatory_space_private_user_extends.rb`
* `lib/extends/commands/decidim/admin/impersonate_user_extends.rb`
##  cd5c2cc - Backport fix/user answers serializer (#11), 2021-09-30
* `lib/decidim/forms/user_answers_serializer.rb`
## Fix metrics issue in admin dashboard
 - **app/stylesheets/decidim/vizzs/_areachart.scss**
```scss
    .area{
        fill: rgba($primary, .2);;
    }
```
## Disable proposals cells caching
 - **app/cells/decidim/proposals/proposal_m_cell.rb**
```ruby
      # Potential backport at https://github.com/decidim/decidim/pull/8566/files
      def perform_caching?
        false
      end
```
## Fix annoucement div displayed while empty

- **app/cells/decidim/announcement_cell.rb**, from https://github.com/decidim/decidim/blob/release/0.24-stable/decidim-core/app/cells/decidim/announcement_cell.rb
```ruby
def empty_announcement?
  clean_announcement.blank? || clean_announcement == "<p><br></p>"
end
``` 
### User info panel overload

- **app/views/decidim/account/show.html.erb** ([original file from Decidim repository](https://github.com/decidim/decidim/blob/release/0.23-stable/decidim-core/app/views/decidim/account/show.html.erb))
* `app/cells/decidim/author_cell.rb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/forms/decidim/initiatives/admin/initiative_type_form.rb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/forms/decidim/initiatives/admin/initiatives_settings_form.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/models/decidim/initiatives_settings.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/models/decidim/initiative.rb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/permissions/decidim/initiatives/permissions.rb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `app/permissions/decidim/initiatives/admin/permissions.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/presenters/decidim/initiatives/admin_log/initiatives_settings_presenter.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/packs/images/decidim/decidim-logo.svg`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/images/decidim/decidim-logo-mobile.svg`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/images/decidim/cc-by-sa--inv.svg`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/images/decidim/cc-by-sa.svg`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/images/decidim/decidim-logo-mobile--inv.svg`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/entrypoints/application.js`
9ed30be - bump to v0.26.1, 2022-05-23

* `app/packs/stylesheets/decidim.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/decidim_application.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/_custom-footer.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/decidim/email.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/decidim/vizzs/_areachart.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/_fontface.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/decidim-merge-old.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/stylesheets/custom-style-backup.scss`
6c57729 - Move to webpacker, 2022-05-23

* `app/packs/src/decidim/decidim_application.js`
6c57729 - Move to webpacker, 2022-05-23

* `app/commands/decidim/initiatives/admin/update_initiative_type.rb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/commands/decidim/initiatives/admin/update_initiatives_settings.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/commands/decidim/initiatives/admin/create_initiative_type.rb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/controllers/decidim/initiatives/admin/initiatives_settings_controller.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/controllers/decidim/initiatives/create_initiative_controller.rb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `app/controllers/decidim/initiatives/authorization_create_modals_controller.rb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `app/controllers/decidim/initiatives/initiatives_controller.rb`
e4d49bb - [FIX] - Initiatives show view (#41), 2022-06-09

* `app/controllers/concerns/decidim/initiatives/orderable.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/controllers/concerns/decidim/initiatives/single_initiative_type.rb`
6d6e8a9 - Ensure 'type_id' is present when single initiative type, 2022-06-27

* `app/views/layouts/decidim/_initiative_header_steps.html.erb`
0a8fdb7 - backport add initiative signature collection period (#33), 2022-06-03

* `app/views/layouts/decidim/_mailer_logo.html.erb`
d16d0ae - Update mailer logo layout, 2022-05-23

* `app/views/layouts/decidim/mailer.html.erb`
13b38f6 - Update mailer layout, 2022-05-23

* `app/views/layouts/decidim/_head.html.erb`
d16dcdc - Update head layout views, 2022-05-23

* `app/views/decidim/initiatives/admin/initiatives_types/_form.html.erb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/views/decidim/initiatives/admin/initiatives_settings/edit.html.erb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `app/views/decidim/initiatives/admin/initiatives_settings/_form.html.erb`
3138b97 - Fix translations (#35), 2022-06-08

* `app/views/decidim/initiatives/initiatives/_index_header.html.erb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `app/views/decidim/initiatives/initiatives/show.html.erb`
afffe82 - Enable or disable comments on initiative type (PR 9318) (#27), 2022-06-06

* `app/views/decidim/initiatives/initiatives/_form.html.erb`
6d6e8a9 - Ensure 'type_id' is present when single initiative type, 2022-06-27

* `app/views/decidim/initiatives/create_initiative/select_initiative_type.html.erb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `app/views/decidim/initiatives/create_initiative/fill_data.html.erb`
d5b5d07 - Enable area label and add translations (#48), 2022-06-21

* `app/assets/fonts/BloggerSans/BloggerSans.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Bold.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-MediumItalic.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Medium.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-MediumItalic.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Italic.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-BoldItalic.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Italic.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-LightItalic.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Bold.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-LightItalic.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Bold.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Bold.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Medium.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Italic.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-MediumItalic.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Light.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-LightItalic.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Light.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-BoldItalic.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-BoldItalic.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Light.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Italic.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-BoldItalic.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-BoldItalic.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Light.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-MediumItalic.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-LightItalic.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-MediumItalic.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Italic.eot`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Medium.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Medium.woff`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-LightItalic.woff2`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Bold.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Medium.svg`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/BloggerSans/BloggerSans-Light.ttf`
d86a371 - last tweaks, 2020-11-24

* `app/assets/fonts/muli/Muli-ExtraLight.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-ExtraLightItalic.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-BoldItalic.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/SIL Open Font License.txt`


* `app/assets/fonts/muli/Muli-Semi-BoldItalic.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-Bold.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-Italic.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-SemiBold.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-Light.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/assets/fonts/muli/Muli-LightItalic.ttf`
403d579 - Add custom font (#142), 2021-02-08

* `app/helpers/decidim/initiatives/initiative_helper.rb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `app/helpers/decidim/backup_helper.rb`
cf4929c - Merge remote-tracking branch 'decidim-app/master', 2021-12-21

* `app/services/decidim/s3_retention_service.rb`
2b582db - fix multipart object tagging (#40) (#41), 2021-12-24

* `config/locales/decidim-module-question_captcha/es.yml`
a345c08 - Fix simple proposal (#10), 2021-11-09

* `config/locales/decidim-module-question_captcha/fr.yml`
d86a371 - last tweaks, 2020-11-24

* `config/url_aliases/reserved_paths.yml`
c9c65a6 - :package: :sparkles: add decidim URL aliases module, 2019-09-24

* `config/webpack/development.js`
9ed30be - bump to v0.26.1, 2022-05-23

* `config/webpack/test.js`
9ed30be - bump to v0.26.1, 2022-05-23

* `config/webpack/custom.js`
9ed30be - bump to v0.26.1, 2022-05-23

* `config/webpack/base.js`
9ed30be - bump to v0.26.1, 2022-05-23

* `config/webpack/production.js`
9ed30be - bump to v0.26.1, 2022-05-23

* `config/webpacker.yml`
9ed30be - bump to v0.26.1, 2022-05-23

* `config/initializers/decidim_questions.rb`
e4d49bb - [FIX] - Initiatives show view (#41), 2022-06-09

* `config/initializers/cookies.rb`
8f5a6d2 - Add Google analytics cookie, 2021-02-01

* `config/initializers/decidim_initiatives.rb`
5f03b4a - backport create initiative and signature type (#46), 2022-06-14

* `lib/tasks/restore_dump.rake`
fbf34c2 - Fix tests and add missing translations (#16), 2022-01-21

* `lib/tasks/bump.rake`
0a8fdb7 - backport add initiative signature collection period (#33), 2022-06-03

* `lib/tasks/repare_data.rake`
0c39958 - backport add data repare rake task (#25), 2022-04-13

* `lib/decidim/initiatives/test/factories.rb`
31f13bb - backport add order for initiatives (#32), 2022-06-06

* `lib/decidim/proposals/proposal_serializer.rb`
033d2df - Update proposals serializer and add specs, 2022-05-25

