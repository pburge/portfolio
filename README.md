# Paul Burge's Portfolio Site.
Deployment plan:

1. When finishing a new feature in local dev, I push up to GitHub.
	- git add -A
	- git status 
	- git commit -m **'commit relevent to the feature that will be added'**
	- git push *github repo name* master

2. If everything looks good, I will then
	- git push **remote_staging_server_name** master
	* and, of course, test on the staging server to see if there are any bugs.

3. After everything has passed my tests, I will then tag a release...
	- git tag -a v **X.X.X** -m 'Tag message here'
	- git push --tags

4. ...and push up from staging to the production server.
	-git push **remote_production_server_name** master

5. After all is said and done, I will sit back and think about where else I could improve.