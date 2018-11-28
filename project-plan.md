Phase 1 - Base application
- Choose a project name!
- Create a github repository for the project name
- Create a Firebase project for the project name
- Create a react app for the project name (create-react-app)
- Add Firebase project to the react app (You did this in the first Firebase tutorial)
- Check the app works locally
- Check the app deploys to Firebase and works
- Commit the code to git
- Push the code to github

It’s important that everything works at this point before you actually add your own code

Do the following steps after each of the next phases (Don’t forget or not bother!)
- Check the app works locally
- Check the app deploys to Firebase and works
- Commit the code to git
- Push the code to github
- Do a pull request and merge with your master branch (Don’t delete the branch if it asks you to)

Phase 2 - Add Authentication
The aim of this phase is to deploy the application to Firebase in its simplest authenticated form I.e. Someone can login and logout

- Create a git branch in your project directory - git checkout -b add-authentication
- Add a simple login form
- Add in your authentication logic you did in the tutorial but don’t do the signup or forgot password stuff as we’ll just add your users directly into the Firebase console for now
- Add a home page (just a hello world page is enough)
- Add logout function which cleans up and returns you to login page
- Add a user to the Firebase console in ‘Authentication’
- Ensure you can log in as that user and get directed to the home page
- Ensure you can log out as that user and get directed to the login page
Note that the login page and the home page should be the same url as being an authenticated user or not should be used as the way to render the correct page

Phase 3 - Add Routing
The aim of this phase is to deploy the application to Firebase with all of the routes implemented as skeleton pages and that you are happy the navigation is as you like it. Note that I didn’t have any support for adding, editing or deleting a Flashcard deck so you’ll need to think about that

- Synchronise your local git repo with github 
	- git checkout master
	- git pull
- Create a git branch in your project directory - git checkout -b add-routing
- Add in the Routing information and components needed to render the views. If you agree with what I did then its as simple as copying what I did but don’t put all the components in the App.js file, use separate files per component
- Ensure a user can login and is directed to the home page
- Ensure that all links work as expected
- Ensure the user can log out

Don’t forget to do the common steps required after each phase!

Phase 4 - Implement List Decks
The aim of this phase is to deploy the application to Firebase with functionality that lists all the decks for the user and displays the deck as JSON when a link is clicked.
This phase will be a little tricky but is a significant one.

- Synchronise your local git repo with github 
	- git checkout master
	- git pull
- Create a git branch in your project directory - git checkout -b add-list-decks
- Add some dummy decks to Firebase Database using the console. Note that these decks should be in the agreed JSON format for a Flashcard deck and are linked to a valid user in Firebase.
- Implement the logic required to retrieve the list of decks for a user from Firebase
- Display the list of decks instead of the previous phases dummy data
- Implement the logic to view the JSON of a Deck (at route /decks/:deck) once it has been clicked in the list
- Ensure a user can login and is directed to the home page
- Ensure that all the decks are listed as expected
- Ensure that you can click on each deck and you are taken to /decks/:deck and it shows the JSON (It’s ugly but don’t worry about it as its temporary)
- Ensure the user can log out

Don’t forget to do the common steps required after each phase!

There are a lot more phases to do but I won’t flesh them out yet as its time consuming!
They are:
- Create a deck (We’ll do this with dummy data sent to Firebase first of all)
- Edit a deck
- Delete a deck
- Study
- revise
- Game one (You may want to consider removing this if pushed for time)
- Game Two(You may want to consider removing this if pushed for time)
- Performance data - I don’t fully understand this yet so we will need to discuss it soon and it may be more than one phase)
- Fully test and fix any bugs
- Style the App using reactstrap!

As you can see, at all stages you have a demonstrable app and you preserve the src code as it was for that stage. This is really useful if you need to rollback from a phase that is too buggy to use and its brilliant for showing how you developed the app.

Now that I’ve written out what you need to do I can see it’s a lot so try to implement up to stage 4 this week to keep on track. It’s a lot of work but it gets easier the more you do.
Keep your discipline and keep your code tidy, readable and don’t have any crap in your code base that you don’t need.

