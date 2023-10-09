# Overrides
## Fixes

### Fix: Fix Display of Budgets Summary (#123), 2023-10-09
* `app/views/decidim/budgets/projects/_order_progress.html.erb`
* `app/views/decidim/budgets/projects/_order_total_budget.html.erb`
  * (Add class `order-total-budget`)
* `app/views/decidim/budgets/line_items/update_budget.js.erb`
  * (Loop on all `order-total-budget` class elements)

### bf363e7 - fix: Fix Display of Budgets Summary (#123), 2023-09-21
* `app/views/decidim/budgets/projects/_order_progress.html.erb`

### 28c8d74 - Add basic tests to reference package (#1), 2021-07-26
* `lib/extends/commands/decidim/admin/create_participatory_space_private_user_extends.rb`
* `lib/extends/commands/decidim/admin/impersonate_user_extends.rb`

## Features
### User info panel overload
* `app/views/decidim/account/show.html.erb`
([original file from Decidim repository](https://github.com/decidim/decidim/blob/release/0.23-stable/decidim-core/app/views/decidim/account/show.html.erb))

### e4d49bb - [FIX] - Initiatives show view (#41), 2022-06-09
* `app/controllers/decidim/initiatives/initiatives_controller.rb`

### 6d6e8a9 - Ensure 'type_id' is present when single initiative type, 2022-06-27
* `app/controllers/concerns/decidim/initiatives/single_initiative_type.rb`
* `app/views/decidim/initiatives/initiatives/_form.html.erb`

### 3138b97 - Fix translations (#35), 2022-06-08
* `app/views/decidim/initiatives/admin/initiatives_settings/_form.html.erb`

### d5b5d07 - BACKPORT Enable area label and add translations (#48), 2022-06-21
* `app/views/decidim/initiatives/create_initiative/fill_data.html.erb`
