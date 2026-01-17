# Paul Burge's Portfolio Site

This is my portfolio site. It is a simple angular site that displays some of my projects.

## Deployment plan

1. When finishing a new feature in local dev, I push up to GitHub.
	- `git add .`
	- `git status`
	- `git commit -m *"<<commit>>"`
	- `git push`
2. If everything looks good, I  deploy using a custom command.
	- `npm run gh-pages`
	* and, of course, test on staging to see if there are any bugs.
3. After everything has passed my tests, I will then tag a release...
	- `git tag -a vX.X.X -m '<<tag text>>'`
	- `git push origin --tags`
4. After all is said and done, I will sit back and think about where else I could improve.

## Tech Used

* Angular
* Typescript
* Bootstrap
* GitHub Pages

## Features

* Responsive Design
* Links to projects
* Links to social media
* Links to email

## Things to do:

* Implement portfolio page
* Implement contact page
* Improve components to be more dynamic
