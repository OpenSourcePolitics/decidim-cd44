# Overrides
## Fixes

### 28c8d74 - Add basic tests to reference package (#1), 2021-07-26
* `lib/extends/commands/decidim/admin/create_participatory_space_private_user_extends.rb`
* `lib/extends/commands/decidim/admin/impersonate_user_extends.rb`

## Features
### User info panel overload
* `app/views/decidim/account/show.html.erb`
([original file from Decidim repository](https://github.com/decidim/decidim/blob/release/0.23-stable/decidim-core/app/views/decidim/account/show.html.erb))

### afffe82 - BACKPORT Enable or disable comments on initiative type (PR 9318, released in 0.27) (#27), 2022-06-06
* `app/cells/decidim/author_cell.rb`
* `app/forms/decidim/initiatives/admin/initiative_type_form.rb`
* `app/forms/decidim/initiatives/admin/initiatives_settings_form.rb`
* `app/permissions/decidim/initiatives/permissions.rb`
* `app/commands/decidim/initiatives/admin/update_initiative_type.rb`
* `app/commands/decidim/initiatives/admin/update_initiatives_settings.rb`
* `app/controllers/decidim/initiatives/admin/initiatives_settings_controller.rb`
* `app/views/decidim/initiatives/admin/initiatives_types/_form.html.erb`
* `app/views/decidim/initiatives/initiatives/show.html.erb`

### 31f13bb - BACKPORT add order for initiatives (PR 9377, released in 0.27) (#32), 2022-06-06
* `app/models/decidim/initiatives_settings.rb`
* `app/models/decidim/initiative.rb`
* `app/presenters/decidim/initiatives/admin_log/initiatives_settings_presenter.rb`
* `app/commands/decidim/initiatives/admin/create_initiative_type.rb`
* `app/controllers/decidim/initiatives/admin/initiatives_settings_controller.rb`
* `app/controllers/concerns/decidim/initiatives/orderable.rb`
* `app/views/decidim/initiatives/admin/initiatives_settings/edit.html.erb`

### 5f03b4a - BACKPORT create initiative and signature type (#46), 2022-06-14
* `app/permissions/decidim/initiatives/admin/permissions.rb`
* `app/controllers/decidim/initiatives/create_initiative_controller.rb`
* `app/controllers/decidim/initiatives/authorization_create_modals_controller.rb`
* `app/views/decidim/initiatives/initiatives/_index_header.html.erb`
* `app/views/decidim/initiatives/create_initiative/select_initiative_type.html.erb`
* `app/helpers/decidim/initiatives/initiative_helper.rb`

### e4d49bb - [FIX] - Initiatives show view (#41), 2022-06-09
* `app/controllers/decidim/initiatives/initiatives_controller.rb`

### 6d6e8a9 - Ensure 'type_id' is present when single initiative type, 2022-06-27
* `app/controllers/concerns/decidim/initiatives/single_initiative_type.rb`
* `app/views/decidim/initiatives/initiatives/_form.html.erb`

### 0a8fdb7 - BACKPORT add initiative signature collection period (#33), 2022-06-03
* `app/views/layouts/decidim/_initiative_header_steps.html.erb`

### 3138b97 - Fix translations (#35), 2022-06-08
* `app/views/decidim/initiatives/admin/initiatives_settings/_form.html.erb`

### d5b5d07 - BACKPORT Enable area label and add translations (#48), 2022-06-21
* `app/views/decidim/initiatives/create_initiative/fill_data.html.erb`
