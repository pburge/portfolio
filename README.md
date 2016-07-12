# Paul Burge's Portfolio Site (Built with AngularJS/Bootstrap).

Viewable here: http://pburge.github.io/portfolio/

Deployment plan:

1. When finishing a new feature in local dev, I push up to GitHub.
	- git add -A
	- git status 
	- git commit -m *'commit relevent to the feature that will be added'*
	- git push **github repo name** master

2. If everything looks good, I will then push to my staging server.
	- git push **remote staging server name** master
	* and, of course, test on staging to see if there are any bugs.

3. After everything has passed my tests, I will then tag a release...
	- git tag -a v **X.X.X** -m *'tag message here'*
	- git push **github repo name** --tags

4. ...and push up from staging to the production server.
	- git push **production server name** master

5. After all is said and done, I will sit back and think about where else I could improve.
