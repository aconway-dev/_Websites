# Set the deployment directory on the target hosts.
set :deploy_to, "/home/mr_dev/sites/#{application}"
set :app_root_url, "sams.ucalgary.ca"
set :app_url, "sams.ucalgary.ca"
set :apache_www_path, "/var/www/"

set :app_root_url_for_catalyst_site, "catalystgrants.ucalgary.ca"
set :app_root_url_for_research_site, "structurems.ucalgary.ca"

# The hostnames to deploy to.
role :web, "sams.ucalgary.ca"

# Specify one of the web servers to use for database backups or updates.
# This server should also be running Wordpress.
role :db, "sams.ucalgary.ca", :primary => true

# The path to wp-cli
set :wp, "wp"

# The username on the target system, if different from your local username
ssh_options[:user] = 'mr_dev'