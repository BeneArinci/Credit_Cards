## Welcome to my tech task 👋

I have been working on this tech challenge from a frontend and a backend point of view.<br>
I used React.js for the frontend and I linked to an API server that I created using Express.js.<br>
During the development of this app I had the opportunity to use my React.js and Node.js knowledge but also to learn and apply new concepts and frameworks.
I mainly focused on functionalities rather than styling but I will link to this later on in the "areas of improvement" section.

### App requirements/functionalities
In order to complete this app I followed these requirements:
```
You have been asked to develop a web application to allow customers to enter their details and review credit cards that are applicable to their credit status.

- The user should submit their details via a form.
- The application should then return a filtered list of cards available to that user; use the rules outlined at the end of this document to decide whether a particular card is available.
- The user should be allowed to select one or more of the returned cards and see the details for the cards selected.
- When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.
```
**How it works (visual)**<br>
When the user opens the app he would find a form with an invitation to insert their data in order to visualise their credit availability<br>
<img src="https://github.com/BeneArinci/Tech-test_TotallyMoney/blob/master/client/public/images/user-form.png" width="1300" height="auto">
After entering their data a cards filtering happens and they'll be able to visualise only the available cards based on their details<br>
<img src="https://github.com/BeneArinci/Tech-test_TotallyMoney/blob/master/client/public/images/rendered-cards.png" width="1300" height="auto">
After entering their data a cards filtering function is run and they'll be able to visualise only the available cards based on their details<br>
<img src="https://github.com/BeneArinci/Tech-test_TotallyMoney/blob/master/client/public/images/selected-cards.png" width="1300" height="auto">

### How to run the app & useful scripts
As mentioned above, the app is made of a frontend and a backend separated parts. Both areas are using a specific package.json file for installing the needed components. <br>
<br>
In order to use the app, please follow these steps:
- **clone the app** 
- run **npm install** from inside the *main* folder (Server side)
- run **npm install** from inside the *client* folder (React)
- run the *backend server* using the command **npm start** from inside the *main* folder
- run the *frontend server* using the command **npm start** from inside the *client* folder
- enjoy using the app on localhost:3000<br>
<br>
If you want to run tests, go into the client folder throught your terminal and type: **npm test**




