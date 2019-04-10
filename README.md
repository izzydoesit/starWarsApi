# Star Wars Fandom

Ever wanted to find out more info on your favorite Star Wars character? Now you can with this React/Redux app (now with built-in API call and error handling!) using the [Star Wars API](https://swapi.co/). You can check out the live version [here](https://starwarsfandom.herokuapp.com). 

![topPage](https://github.com/izzydoesit/starWarsApi/blob/master/starWarsFandom1.png)
![bottomPage](https://github.com/izzydoesit/starWarsApi/blob/master/starWarsFandom2.png)


## Objectives

- Allow users to choose a character from the provided JSON file
- Upon selection of a character, the UI should update to display information about each of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
- Do this with any js framework, and some kind of component-based pattern
- You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
- Don't load the movie data until the character is clicked
- Don't show any movie information until all of the character's movies have loaded
- Handle HTTP errors (While loading the character as well as the film information)
- Separate concerns where applicable
- Make it pretty! You're encouraged to use Bootstrap, Bulma, Material Components, or any other css framework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
yarn 1.15.2 (or npm)
create-react-app 2.1.8
```

### Installing
From the command terminal, clone the repository to your local directory...
```
$ git clone https://www.gihub.com/izzydoesit/starWarsApi.git
$ cd starWarsApi
```

Then run yarn (or npm equivalent) commands to install all dependencies and start the server.  

```
$ yarn install
$ yarn start
```

## Deployment

You must have Heroku CLI installed and be logged in to Heroku in order to deploy live via Heroku servers
(Please see the [documentation](https://devcenter.heroku.com) to get set up with Heroku)

Then, after installation and login to Heroku CLI, via the command line...
```
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```
## Built With

* [React](https://facebook.github.io/react) - Front end JavaScript framework used
* [Material UI](https://material-ui.com/) - UI library for React that implements Google's Material Design
* [Redux](https://www.reduxjs.org) - Predictable state container used in front end application
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux middleware to make asychronous actions
* [Axios](https://github.com/axios/axios) - Promise-based HTTP client

## Author

* **Israel Matos** - [Github](https://github.com/izzydoesit)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
