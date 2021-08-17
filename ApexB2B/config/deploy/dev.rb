# Set the deployment directory on the target hosts.
set :deploy_to, "/www/var/#{application}"
set :app_root_url, "sams.dev"
set :app_url, "sams.dev"
set :apache_www_path, "/var/www/"

set :app_root_url_for_catalyst_site, "catalyst.dev"
set :app_root_url_for_research_site, "msresearch.dev"

# The hostnames to deploy to.
role :web, "localhost"

# Specify one of the web servers to use for database backups or updates.
# This server should also be running Wordpress.
role :db, "localhost", :primary => true

# The path to wp-cli
set :wp, "wp"