## Angular tour of heroes including a nodejs server

## Server side

An empty server side project implemented using:

- nodeJs
- express
- mongodb
- mongoose

Other used:

- gulp
- gulp-jshint
- nodemon   
- passportjs
- underscore    
- vash       

___


**Database**: Mongo.

**Authorizing**: Passport with local authorization (Username/Password).

**View engine**: vash.

___

#Install process:

-1 Clone repository:

    git clone https://github.com/ugeHidalgo/myapp.git myapp 
    (This will clone the repository to a myapp folder)

-2 Install:

    - Install mongodb downloading from http://www.mongodb.org
        Set path for databases with mongod --dbpath path

    - Install dependecies needed:
    ```
        cd ang2
        cd server
        npm install
        cd ..
        cd client
        npm install
    ```

-3 Run:
    Launch mongoDB in a console:
    ```
        mongod
    </code>
    Launch server side with any of these options:
    ```
        - npm start 
        - gulp
        - gulp default
        - gulp develop
    ```
    Access site to http://localhost:3000

    Launch client side with any of these:
    ```
        - ng serve
        - ng serve --host 0.0.0.0  (If you one to connect to your client side server from other machine different than localhost)
        - ng serve --proxy-config proxy.config.json --host 0.0.0.0 (Uses the proxy.config.json to send all api requests to the server side at http://localhost:3000 )
    ```

-4 Debug server side with the debugger in visual studio code or with node inspector:
    ```
    node --inspect --debug .
    Copiar url y pegar en un browser.
    ```

-5 Remote Data base can also be used hosted in mLab (Need to change local db config to remote. See dbConfig.js to change it)


## Client side

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).