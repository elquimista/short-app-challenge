json.urls do
  json.array! @short_urls do |short_url|
    json.(short_url, *short_url.attributes.keys)
    json.shortened_url shortened_url(short_url.short_code)
  end
end
