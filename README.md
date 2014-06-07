# Paul Burge's Portfolio Site.
Deployment plan:

1. When finishing a new feature in local dev, I...:

	- git add -A

	- git commit -m **'commit relevent to the feature that will be added'**

	- git push


	* If everything looks good, I will then

		- git push **remote_server_name** +master:refs/heads/master

2. After testing online and everything looks great, I will then update the repo's version:

	- git tag -a v **X.X.X** -m 'Tag message here'

	- git push --tags

3. After all is said and done, I will sit back and think about where else I could improve. 