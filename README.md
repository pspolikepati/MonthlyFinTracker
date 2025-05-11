Note: Once you get the code from GitHub, npm install will need to be run in the terminal to install all the dependencies and to run the application "npx expo start" will need to be called.

Team Members: Pranav Polikepati, Neerav Mula

Project Goal: The goal of this app is to provide to a way to keep track the financial situation of a user. The app will allow the user to add their budget for the month and their expenses. It will also allow the user to input how many days it has been in the month and how many total days are in the month. Using the proportion of the month that has already passed, it will give the user a response of whether they are on track to meet their budget for the month or not.

Project Features:
- Inputting the budget for the month, the expenses so far, how many days in the month have already passed, and how many total days are in the month.
- The app will then calculate the proportion of the month that has passed and compare that proportion to the proportion of the budget that has already been used.
- Based on the comparison, the app will either display an image of being on track if the proportion of budget used is equal or less than the proportion of the month that has passed, or an image of saying that work is need to get back on track if the the proportion of budget used is greater than the proportion of the month that has passed.

Project Architecture:
- There will be a total of three different basic screens
- First is the home screen which will have the title of the app and the fields to entire the budget, expenses, days passed, and total days. There will also be a button that takes this information and calculates and compares the proportion of the month that has passed as well as the proportion of the budget that has been used and displayes the relevent image based on the comparison.
- The second and third screens are just each respective image that will be displayed based on the result of the comparison. Each of these screens will have an identical back button that will take the user back to the main screen.
