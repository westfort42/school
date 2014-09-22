Lakehead University Residence Management App
============================================

####Requirements
######Quality Requirements
- Secure
- Fast
- Accesible
- Support for multiple screen sizes/resoutions/pixel ratios

######Functional Requirements
- Login system
- Two diferent user types with varying permission levels
- Browsing residences
- Registering for residences
- Payment system?? No thanks
- Room allocation
- Searching for rooms (filter by type, price, etc)

######Use Case Requirements
- Invent some scenarios and write about it
- Imagine use cases for people with varying levels of accesibility, internet connectivity, age, etc

######Technological Requirements
- Database, server, client
- Framework(s)
- Runtimes: 
    - Server -- Targeting Linux for deployment likely via Digital Ocean), Windows/Mac for local development
    - Client -- Targeting *most* web browsers (we plan on having zero legacy support). That means desktop and mobile browsers
- Dependencies: NPM will take care of this
- Frameworks/Tech Stack (tentative): Hood.ie, CouchDB, Ember, Cordova??

####Use Cases
######Central Use Case
This is supposed to be the use case that is the most typical. It's basically the core of what the application does. The entire system needs to be built around this use case.

**The project needs to be programmed in an object oriented language**

##Project Description (Week 1)

According to the assignment, the title of the project is *A Residence Management System*. there are currently **three** types of residences: residence halls, apartments, and townhouses. Each style provides a unique environment that allows to experience freedom while receiving the academic and social support you need for success. 

######Residence Hall Rooms
- Double
- Basic single
- Single

These all come with a full meal plan.

######Townhouse and Apartment Accomadations
- Reserved for upper year students
- Meal plan availability not disclosed

Our task is to design a management system for dealing with these accmadations. It has been mentioned that our program **must be functional on all devices** (desktop and mobile).

##Requirement Analysis (Week 2)

######Functional
These are just some things I think the application should do:
- A manager should assign accomadations to students using this system
- A manager should easily find out info for each room of the residence, such as what kind of devices are provided in the room, who is living in each room and the duration, etc. The manager can also post notifications, advertise activities, etc


######Quality
- The quality should be good??
- Good, user friendly design and user experience
- Usability regardless of screen size
- Accesibilty for screen readers and other devices
- Fast database queries and load times
- Hopefully no bugs

######Platform
- Based on the requirements, the ideal platform for the client is the web. It is cross-platform (browsers work the same on Linux, Mac and PC, the software can be run on mobile devices through their web browsers or through an app containing an embedded implementation of a web browser (like WebKit).
- For the server and database, the platform will be Ubuntu 14.04, with either Apache or Nginx for a component of the server, Node.js for the other component of the server, and (tentitavely) CouchDB as the database. This simply because Ubuntu 14.04 is available on a very cheap hosting plan, and is the most familiar with us. CouchDB was chosen because of it's HTTP API and functionality with Hood.ie (part of our client-side stack). Node.js was chosen because of its open source software ecosystem, ease of implementation, and familiarity with members of our team (if you know C, JavaScript is easy to learn).
- More specifically, on the front-end we will be using a few tools. The first two are NPM and Bower, which are simply package managers used to for dealing with dependencies in our project. Another tool is Grunt, which is a JavaScript task runner. This is used to run tests, compile files, etc. Framework-wise, we're using Hood.ie, a front end tool for making web applications super simple. For our stylesheets, we'll be using SASS with Compass to speed things up nicely, and to take advantage of mixins (this'll help with rapid prototyping and Agile development). As of right now, we're undecided about whether or not to use a client side MVC liek Ember or Angular, and pland plan to look into this further.
 
######Process
-  We'll just make it

##Instructions for Getting Your Dev Environment Setup
Hey guys,

######1. Get a GitHub account

Go (https://www.github.com)[GitHub] and sign up for an account. You'll also need
to install Git on your computer, which I THINK happens when you sign
up for GitHub and download the GitHub desktop software. There are also
instructions on GutHub's website.

Find (https://github.com/bentranter/school/tree/master/software-engineering/project)[the project here]
and bookmark that, since that's where the project will reside. After
that, click the "Fork" button in the top right of the screen. This
will copy the entire project to a repository in your own GitHub
account, which you can then clone and work on locally. To do this,
download the GitHub desktop software (https://windows.github.com/)[Windows],
then go back to your own repository, and click "Clone in Desktop".
This downloads the files as lets you start working on them.

Also, don't bother going further than this until Wednesday, because I
still need to set the project up haha.

######2. Install Node.js

Go to the site and follow the instructions, its pretty simple
(http://nodejs.org/)[Node.js site].

######3. Install CouchDB

Same deal, just go to the site and download (http://couchdb.apache.org/)[CouchDB].

######4. Install Hood.ie

I've never done this on Windows before, but I think it's pretty easy.
If it doesn't work, I can try to help you figure it out once I get it
setup on Windows myself. As far as I know, open the Windows command
prompt thing, and then type:

npm install -g hoodie-cli

There are more instructions on their website.

######5. Start the app

Open the command prompt again, and navigate to where the folder that
contains the project is. On Windows, you type 'dir' to list all your
folders, and then 'cd' and the folder name to go into one. Once you're
there, type 'hoodie start'. You should be good to go! Your browser
should open automatically.

##Week 3: Requirement Document


