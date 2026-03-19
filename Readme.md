This assignment was completed by testing the live Giphy app using Cypress and TypeScript.
URL used for testing: https://giphy-app-nu.vercel.app/
The source code was not provided so I worked with the live application as a black-box testing exercise.
I focused on the main features that were available in the website:
1. Loading gif photos
2. Searching for a specific gif
3. Uploading a gif

Tools used:
1. Cypress
2. TypeScript

What I have tested:

Loading gif photos:
What I am valildating in the test:
Trending API request is made
Response is 200
15 gifs are loaded on the page
images are displayed on the page

Search Box:
What I am valildating in the test:
Search request is made
correct search text is send
response is 200
15 Gifs are returned

Scroll Till End:
Initial request is made on the page 
After scolling down more gifs are getting loaded
API request with more content is going through successfully


Approch I took:
Checking API calls using cy.intercept
Checking UI using cy.get and cy.contains
Checking scrolling using cy.scrollTo



Time Taken
I have taken 4 hours including cypress setup and exploring the application.



