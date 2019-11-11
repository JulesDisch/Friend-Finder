Here we have a full-stack site, utilizing a custom CSS, JavaScript for the logic and jQuery to manipulate HTML on the client-side, as well as Express.js to handle routing on the server-side. We have deployed the finished application with Heroku. 

The application is a Man's (or Woman's) Best Friend Finder. The user will fill out a survey, and the app will compare the answers with results from a variety of dog breeds. It will then display the breed's name and picture that best matches the user's input.

The logic to choose which is the best dog match relies on an Immediately-invoked Function Expression (IIFE). I wanted the application to be able to run multiple times without a page refresh, and to always provide a dog breed. In order to achieve this, we first post the user's results to the dogs API, and then compare them with the dogs already listed from the server's application data with a get request. 
First, we convert the user's answers to numbers, so we can more easily compare them with the dogs' answers.
We put these numbers in an array.
Second, within the get request, we have a function that for everytime the user's answer matches a dog's answer, that dog breed's name gets pushed to a new array.
Third, still within the get request, we have the IIFE, which, loops through that new array to find which dog breed is most frequent. 
We use jQuery to ensure the name and image for the most frequent dog breed correctly populate the result modal.

Once the user sees their result, if they click out of the modal, the fields clear, allowing them to take the survey again.

The deployed version can be found at https://desolate-stream-65085.herokuapp.com/.