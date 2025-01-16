# GeoIP Block NGINX Ubuntu 20.04

Block or filter IPs based on location in Nginx (tested on 1.18.0) on Ubuntu 20.04.

## Install Nginx modules

To make use of the geographical filtering, we must first install the Nginx GeoIP module as well as the GeoIP database containing the mappings between visitors’ IP addresses and their respective countries. To do so, let’s execute:
```
$ sudo apt install libnginx-mod-http-geoip geoip-database
```

Download the GeoIP database.
```
$ sudo mkdir /usr/share/GeoIP
$ cd /usr/share/GeoIP
$ sudo wget sudo wget https://centminmod.com/centminmodparts/geoip-legacy/GeoIP.dat.gz
$ sudo gunzip GeoIP.dat.gz
```

Add config to nginx `/etc/nginx/conf.d/geoip.conf`:
```
# GeoIP database path
#

geoip_country /usr/share/GeoIP/GeoIP.dat;
```

Edit nginx config `/etc/nginx/nginx.conf`. Add this below the `http {` line to only allow Russian IPs You can use [ISO’s full, searchable list of all country codes](https://www.iso.org/obp/ui/#search) to find your code.
```
map $geoip_country_code $allowed_country {
    default no;
    RU yes;
}
```
Finally, add this to your sites virtual config `/etc/nginx/sites-available/siteconfig` below `server {`:
```
    if ($allowed_country = no) {
        return 403;
    }
```

And reload Nginx `sudo systemctl restart nginx`