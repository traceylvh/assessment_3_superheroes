# assessment_3_superheroes


(Angular and MongoDB)

## Your Hero Tracker

The Department of Superhero Knowledge needs an app to help track super hero aliases and powers. You are going to build them this app with Angular and MongoDB. This app will have the following features. Please do not add anything. Focus on the functionality listed.

###Views and Controllers

Your app will have two views, two routes, and two controllers: one each for Hero entry and one each for Hero listing and removal. Additionally, you must have a factory that will facilitate the actual communication to the server (GET and POST calls) as well as make data received from the server available as a property of the Factory. The factory should be made available to each of the controllers.

###Hero Entry

This view will have a form to fill out and create new heroes. Each hero will have the following information on their record:

alias (this is their superhero name)

first_name

last_name

city

power_name

Store these in a Collection called Heroes with Mongo.

### Super Power Select

The above mentioned view will utilize a list of known super powers to populate a select list drop down. Each super power has just one field called: power_name

Enter the following into your database of super powers:

Invisibility

Flight

Super Speed

Heat Vision

Super Strength

Accelerated Healing

Power Blast

Animal Affinity

Use the power_name string field as the value in your option elements. This would store the string on the Hero object.

### Hero Listing & Removal
This view should show a list of heroes, displaying all the information from the entry captured in the view before. Each listing should have a button to delete the listing from the database.

### Node Server
Your app will need a Node/Express server that can serve static files. It should make use of route modules and run on port 4242.

### Database
If you follow the naming guidelines above for your Collection, there is no need to submit any information about your database.
