# AngularJS Boilerplate with JWT authentication

This is a boilerplate AngularJS project that is configured with JWT authentication for routes and api requests.
It was based on this great tutorial [Flexible and Easily Maintainable Laravel + Angular Material Apps](http://www.sitepoint.com/flexible-and-easily-maintainable-laravel-angular-material-apps/).

The app has a simple login page to create a JWT and store the token in local storage. This token is then sent in the header with any subsequent requests.

The angular route /#/quote is protected and you won't be able to reach the page unless you have logged in. Once you are logged in you will be able to fetch a quote from `Chuck Norris` via an api call, which is also restricted.

## Simple Rest API

I have included a simple nodejs rest api for testing the angular authentication.
This project was directly copied from [NodeJS JWT Authentication sample](https://github.com/auth0/nodejs-jwt-authentication-sample).

### Build and start the server

From the root directory perform the following.

```
cd rest-server/
npm install
node server.js
```

The server will start running on localhost:3001

### Start the angular app

From the root directory perform the following.

```
npm install
bower install
gulp
```

You should now be able to run the app by browsing to the public folder

## Todo

Add a local server to the gulp task



