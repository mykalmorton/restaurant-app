# Udacity Restaurant Review App 
The last project for the Udacity Front End Developer NanoDegree. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for reviewing and testing out the application. For the FEND NanoDegree, only the first part of a three part MWS NanoDegree project were required. Usage instructions are not much more than getting a Python server running, and point your browser to the required port.

## Prerequisites
Python 2 or 3 are required to run this web application. For Linux/Unix based systems, as well as MacOS, Python is usually included. Go to terminal and check your Python version by typing Python -V.

This project also requires a MapBox API key, which can be aquired at: MapBox. Depending on when this is viewed, you could be prompted to place a MapBox key into the indicated location in the main.js and restaurant_info.js files.

As a note, Udacity provided with a working project that was updated to ES6, the more modern version of JavaScript. For the most part, this means the application is best run in Chrome, FireFox or Edge browsers. Older versions if Internet Explorer (IE) may not display or function correctly.

## Options to view, download or clone the project:

You will find a green button to clone or download the project. Choose which you prefer.
If cloning, the HTTPS link will be listed as the following: https://github.com/mykalmorton/restaurant-app
Navigate to where you cloned or downloaded the project and continue with the instructions below.
Starting the Server
These are simply the instructions Udacity as provided below to get the application running on a simple Python based server, and then get it opened in a browser. Assuming Python is on your system path, navigate to main folder of the project you downloaded or cloned above and do the following:

Navigate to the main project folder and run the following in your terminal:
Python2.x: python -m SimpleHTTPServer 8000
Python3.x: python3 -m http.server 8000
Open a browser such as Chrome or FireFox to:
http://localhost:8000
Should be able to view and use the application.

## Using the Application
The Restaurant Review App is simple to use: You are provided with a map and filtering options. Select the neighborhood in New York City and the type of cuisine you are interested in from the drop down selectors. The options will be filtered based on your preferences, and the map will update as well with your selections. Once your options are provided below, as restaurant cards with a photo, you can select one to view more information. A full photo, a map, and all the reviews will be provided for the selected restaurant. There is a breadcrumb navigation near the top of this view to return to the selection screen. Easy as that!

Built With
MapBox - The Map API Used
Leaflet.js - Library used with Mapbox
Atom - Editor happily used
Authors
Chad Sisk - Initial work - chadwyck242.
Project code provided by Udacity as part of a NanoDegree requirement.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
- Mozilla Developer Network MDN Documentation and Tutorials
- Udacity FEND Student Slack Group
- CSS-Tricks Tutorials and Guides
- Smashing Magazine Articles and Guides

Below are the original instructions provided by Udacity, for a more general idea as to what the project requirements were.

Restaurant Reviews
### Project Overview: Stage 1
For the Restaurant Reviews projects, In Stage One, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also begin converting this to a Progressive Web Application by caching some assets for offline use.

## Development Strategy
### Get a MapBox API key

- I have a MapBox account, go ahead and create one
- I didnt use Google Maps, there is a google-maps branch of the starter code. You'll need your own Google Maps 
   API key
   
### Get the map on the screen
- Head over to your account and create a token. Replace the text <your MAPBOX API KEY HERE> inside of main.js with your key
Using Google Maps instead? Replace the text YOUR_GOOGLE_MAPS_API_KEY in index.html and restaurant.html with your own key
- Now, what about rendering the map for individual restaurants? Check out restaurant_info.js. Where would be a good spot to place your API key?
  
### Convert the provided site to use a responsive design. 
  All responsiveness should be done with CSS (Bootstrap and other CSS frameworks should not be used)

- Use appropriate document type declaration and viewport tags. Where would you add these tags in the index.html and restaurant.html files?
- How does everything look after adding the appropriate tags? Are there any existing style values in styles.css that we can immediatel y fix to make things more dynamic? Hint: how does using a % value differ from using a strict px value?
-Create a responsive grid-based layout using CSS. Items such as the restaurants-list would be a great place to start. What attributes can you add to make sure these items fit a mobile screen (i.e., a smaller viewport)?
- Use media queries that provide fluid breakpoints across different screen sizes
- Use responsive images that adjust for the dimensions and resolution of any mobile device. For a more in-depth look at responsive images, check out our Responsive Images course
- Be sure to test responsiveness (especially images) across different web browsers, such as Chrome and Firefox

### Implement accessibility features in the site HTML
- attributes like tabindex to indicate if (or where) an element sits in keyboard navigation order (e.g., by pressing the Tab key on the keyboard)? What will be your first element? Your next?
- Note that most of this HTML is generated by JavaScript functions (e.g., restaurant item HTML). How can we use JavaScript directly to create a tab index for each element desired?
- What about semantics? Which attributes can we add (and to which page elements) to reflect an element's role?
- Be sure to make both your main page and restaurant detail page accessible for users
### Add a ServiceWorker script to cache requests to all of the site’s assets 
(so that any page that has been visited by a user will be accessible when the user is offline)
- Only caching needs to be implemented, no other ServiceWorker features
- Which file(s) would you need to register a service worker? Be sure to have a file ready to handle the service worker
- After the service worker is properly registered, which event(s) are you listening for? What is/are the response(s)?
- We recommend against testing the service worker or the project itself while in private browsing (i.e., incognito) mode


## Specification
You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

## What do I do from here?
In this folder, start up a simple HTTP server to serve up the site files on your local computer. 
Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
In a terminal, check the version of Python you have: python -V. 
If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

With your server running, visit the site: http://localhost:8000, and look around for a bit to see what the current experience looks like.
Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
Write code to implement the updates to get this site on its way to being a mobile-ready website.
Leaflet.js and Mapbox:
This repository uses leafletjs with Mapbox. You need to replace <your MAPBOX API KEY HERE> with a token from Mapbox. Mapbox is free to use, and does not require any payment information.

Note about ES6
Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
