# x-Square

An App that keeps a record of all the great experiences you want to remember.

## The Purpose

The purpose is to have one place to keep together all the information for a particular experience. Things like pictures, location, and other critical details, all kept neatly together, documented, and easy to share.

The real purpose of the CodeNode group is to learn to use the components like nodeJS and ember to build active one page web sites efficiently without resorting to a canned templated presentation.  We want a basic CRUD model but with enhancements and a good standard authentication mechanism.  The model we develop and learn how to manipulate should be useful for many projects.

## Installation - Part One - Preparing a development machine environment

One computer acts as both 1) client with browser (usually Chrome) and 2) the server(s) running NodeJS and Hapi and separately the database server mongodb (and Mongoose).   These are on one machine connected by localhost instead of the Internet for testing and development.

It is best to install the main components globally, that is accessible by $PATH and in one location despite possibly multiple projects or versions of projects, such as x-squared on your machine.  These include the following: 1) git, 2) nodeJS itself and npm, 3) Bower, 4) ember-cli (usually just called ember), 5) PhantomJS and 6) mongodb with Mongoose). You may have some or all of these already.

The OS may be Linux/Kubuntu (Kirt) or OS-X/Mac (August?, Ian?, Matt ?) or could be Windows.  August sometimes runs Mac for client and a Wndows Server on separate machines. They migh be connected by a LAN-only or the server may have a static IP and domain-name and be accessible on the Internet.  This, of course, is the production model.  TO add further variants, the server could be a cloud instance with an IP (and DOmain name) just fired up when needed for testing/development - or in production.

Actually installing the basic components varies somewhat from OS to OS.  Mac's use Brew, Ubuntu may use the package manager or just download and unzip or untar a file.  See the links below.  You only have to do this stage once.


* [Git](http://git-scm.com/)		Local and collaborative at github/x-square
* [Node.js](http://nodejs.org/) (with NPM)
*    MongooseJS   and mongoDB
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
     This includes ember-data
* [PhantomJS](http://phantomjs.org/)    Test Management

Some of this may require sudo or root access.  That should not be required after this stage. Much?

## Project Installation - x-square

* change into the new parent directory.  You can decide where. 
*     DON'T Forget this.  git and many other parts make use of the current direcctory ($pwd)
      The git clone will then create a subdirectory 'x-square'
      And load the repository into it.
      
* `git clone <repository-url>` this repository is ours at github-
   ie.  git clone https://github.com/NodejsHouston/x-square.git

* `npm install`          #these two steps take some seconds and spit out many details...
* `bower install`

## Running / Development

*  The Current Directory ($pwd) must be the x-square repository
* `ember server`       # "ember server" is a two-word ember-cli command. 
* `		         # ie "server" is not a filename. This confused me awhile.

*  The second server is a data/API server.
   It is started in a terminal with
   $  node 

Now fire up you browser, usually chrome and give it the localhost url-
*  at [http://localhost:4200](http://localhost:4200).
         The port 4200 is specified in our configuration of ember
   This should bring up, if all is well, the x-square splach page and login.

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
           
   When watchman is running, it 'watches' the source files in x-square and automagically
   performs the compilations needed, albeit a little slowly.
   
   One such compilation is from Handlebars template files (source) to javascript representations which work with data descriptions to create html in the client which merge data and the html structures.
   
## The Blook
I am compiling chunks of knowledge as I grasp it about this whole process and the components.

This takes the form of static html pages, organized and with many links among them for rapid browsing.

These are in two folders under public/
Aim your browser at .../x-square/public/DocXsq/DocXsq.html
Or you may browse directly on github (after signing into github?)-
    hhttps://github.com/NodejsHouston/x-square/blob/master/public/DocXsq/DocXsq.html
 or NOT!  It shows the raw html, not the pages.  Use your local copy.

These pages get managed along with everthing else within the git folder structure.



## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

