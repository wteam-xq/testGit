#!/bin/bash
WEB_PATH='/var/www/dev.lovelucy.info'
WEB_USER='lovelucydev'
WEB_USERGROUP='lovelucydev'
 
echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Finished."