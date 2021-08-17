# Set the deployment directory on the target hosts.
set :deploy_to, "/home/mr_dev/sites/#{application}"
set :app_root_url, "sams.cultivatedcode.com"
set :app_url, "sams.cultivatedcode.com"
set :apache_www_path, "/var/www/"

set :app_root_url_for_catalyst_site, "catalyst.cultivatedcode.com"
set :app_root_url_for_research_site, "msresearch.cultivatedcode.com"

# The hostnames to deploy to.
role :web, "sams.cultivatedcode.com"

# Specify one of the web servers to use for database backups or updates.
# This server should also be running Wordpress.
role :db, "sams.cultivatedcode.com", :primary => true

# The path to wp-cli
set :wp, "wp"

# The username on the target system, if different from your local username
ssh_options[:user] = 'mr_dev'