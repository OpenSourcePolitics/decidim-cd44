# List of overloaded files for specific needs in this repository

## Fix annoucement div displayed while empty

- **app/cells/decidim/announcement_cell.rb**, from https://github.com/decidim/decidim/blob/release/0.24-stable/decidim-core/app/cells/decidim/announcement_cell.rb
```ruby
def empty_announcement?
  clean_announcement.blank? || clean_announcement == "<p><br></p>"
end
``` 
### User info panel overload

- **app/views/decidim/account/show.html.erb** ([original file from Decidim repository](https://github.com/decidim/decidim/blob/release/0.23-stable/decidim-core/app/views/decidim/account/show.html.erb))

