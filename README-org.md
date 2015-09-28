# Ember-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)		Local and collaborative at github/x-square
* [Node.js](http://nodejs.org/) (with NPM)
*    MongooseJS   and mongoDB
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
     This includes ember-data
* [PhantomJS](http://phantomjs.org/)    Test Management

## Installation

* change into the new parent directory.
      The git clone will then create a subdirectory 'x-square'
      And load the repository in it.
      
* `git clone <repository-url>` this repository
   ie.  git clone https://github.com/NodejsHouston/x-square.git

* `npm install`
* `bower install`

## Running / Development

*  The Current Directory ($pwd) must be the x-square repository
* `ember server`       # This is an ember-cli command including 'server', 
* `		not a filename
* Visit your app at [http://localhost:4200](http://localhost:4200).
         The port is specified in 

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details
We have used ? which so far in x-square.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
        These 'compile' and create the dist/*   Substructure 
           from source in app/*

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

