Note: Once you get the code from GitHub, npm install will need to be run in the terminal to install all the dependencies and to run the application "npx expo start" will need to be called.

Team Members: Pranav Polikepati, Neerav Mula

Project Goal: The goal of this app is to provide to a way to keep track of feelings that one yearns for from one's youth. Such feelings occur mainly through the items that the individual consumed in a happy context. As such keeping track of those items will allow for the individual to relive those feelings and have a happier life.

Project Features:
- Adding anything to a main "nostalgia" list on a tab
- Filtering tabs functionality to isolate the items on the main list into their categories of "nostalgia" such as images, songs, items, etc...
- Be able to isolate or organize items on the list by "feeling"
- Be able to click on the items in the list and isolate details about the items such as author, songwriter, timing of the item, album cover, etc... based on the item type added
- Add the details about list item when adding the item and while editing the pre-existing item on list  
- The items to be added include: "nostalgic" visuals, songs, items

Project Architecture:
- There will be a total of three different basic screens
- First is the home screen which is the screen that holds the list of songs added.
- There will be a button looking like a + that will take the use to a second screen when clicked: a screen to add songs and all their corresponding information to the song list with an add button along with a back button to go back to the main screen in case of not wanting to add anything.
- The third screen, which is accessible through the main screen, is a standard screen which replaces the contents its showing based on the song that was clicked on in the main screen along with a back button to go back to the main screen. When a new song is clicked, the third screen will show the components associated to the song that was clicked.
