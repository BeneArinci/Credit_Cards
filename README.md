## Welcome to my tech task 👋

I have developed this web application working both on its back-end and front-end.<br>
I used React.js for the frontend and I linked it to an API server that I created using Express.js.<br>
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
If the data are incorrect, the user is sent to different route. Here, they are given the possibility to go back and insert again their data<br>
<img src="https://github.com/BeneArinci/Tech-test_TotallyMoney/blob/master/client/public/images/invalid-input.png" width="1300" height="auto">


### How to run the app & useful scripts
As mentioned above, the app is made of a frontend and a backend separated parts. Both areas are using a specific package.json file for installing the needed libraries. <br>
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

### Personal Achievements
I am really happy I've been able to work on this challenge because it allowed me to learn and apply something new, this is always what I am looking for.<br>
In particular, I had the opportunity to:
- setting up an API server using Express on my own. I did it only once in the past but it was a group project
- creating a React app from scratch, not using create-react-app
- using React-router-dom (also in this case, I had just an experience in a group project)
- practicing my testing skills with React. I started learning how to test a react app just 20 days ago
- developing an extensible logic. It will be easy to add new cards to the API.
I am working with React for less than 2 months and I am glad of what I've built. Also excited for what I'll be able to learn next :smile:

### Areas of Improvement
Everything is improvable and I'd love to hear your feedback about this web app :smile:<br>
Something that I am already aware of and I cannot wait to work on is the following:
- From a functionality point of view, in case of invalid input from the user, I would like to be able to block them in the form route, without having to send them to another route and, then, back to the form one.
- Testing wise. I've not been able to feature test the entire app because I had issues with mocking the endpoint. More specifically, I was able to mock the fetch call but for some reasons my tests for the app component are not working. I need to understand why and make it work.
- CSS and Styling. This wasn't my main focus. I was more interested in developing the required app functionalities. I mainly relied on Tachyons and some CSS so far but I would love to make it more personalised








