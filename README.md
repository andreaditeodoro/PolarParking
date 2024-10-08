https://github.com/andreaditeodoro/PolarParking.git

# Polar Parking
The Polar Parking interface is designed to address issues surrounding parking on Bowdoin's campus, making the process easier and more efficient. The interface has two main functions that contribute to the overall goal of helping users effectively find parking, logging and unlogging a parking spot, as well as the ability to submit reports, alter system preferences in settings, and access a help page. We used these features because they encompass the basic needs of Bowdoin community members when it comes to navigating parking on campus. In the future, we hope to add more functionality to some of our interface pages,such as the help page. We also hope to improve upon our current system for logging and unlogging spots, such as indicating to the user where they are currently parked or making unavailable parking spots appear different from open spots on the log page itself. 
## Installment and Running the Interface
The Polar Parking interface can be accessed through the index.html file. This file can be found in the PolarParking subfolder within the code folder for our final project submission. Index.html should be opened in the user's preferred browser and increased to full screen for maximum efficiency. Once the index.html file is opened, the user will be able to see the homepage of the interface and they can then navigate to any other .html file that makes up the interface through a variety of different links and buttons.

To use the interface for its inteded purpose of finding parking on Bowdoin's campus, the user can first navigate to the right side of the homepage. Here, under "On-campus Parking Locations," the user can choose from one of three parking lots on campus: Farley, Coffin St, and Admissions. There are lot descriptions for each lot, as well as an accurate count of the number of spots available. To navigate to one of these lot pages in order to log a spot, the user should click on the button associated with their desired lot. From here, the user will encounter 6 different buttons representing different numbered spots, as well as a map of the parking lot. The user should click on one the button of the numbered spot they desire to log. They will either encounter a confirmation message, where they will then be directed back to the homepage, or they will get a message in which the spot is already occupied. If this is the case, the user will be brough back to the homepage and should try to find another parking spot.

To unlog a spot, users should scroll to the bottom of the page, and under the "Unlog a Spot" section, they should click on the button associated with the parkimg lot they last logged a spot in. This will bring them to a new unlog page, where they can click on the button associated with their logged spot to unlog it from the interface. 

To navigate to the Settings page, the user should use the Settings link in the Navigation bar. On this page, the user can change there preferences in the fields indicated by drop down menus. They can return to the homepage by clicking Home in the Navigation bar. 

To report something with the Polar Parking interface, users should navigate to the Report link in the navigation bar. Here, they can fill in one of two text boxes, which are differentiated based on who the report will be sent to: Bowdoin Security or App Developers. To submit a report, the user should press the Submit button, where they will then receive a report confirmation message that will direct them back to the homepage. 

To access the help page, users should click on the Help link in the Navigation bar. Here they will be brought to a page with a search bar for looking up specific questions, as well as buttons that address common problems. Again, to return to the homepage users should use the Home link in the navigation bar.
## Pages and Functions
### Homepage
The index.html page is our homepage. This is the same with all the other pages but there exists a navigation bar where the user can navigating to navsettings.html, report.html, navhelp.html, and back to the homescreen. On this homepage, along with the map, logo, tagline, and title, the user can begin the function of logging or unlogging a spot. 
### Settings
The navsettings.html page allows for a user to change their status. There consists three drop down options that change whether they're a student, faculty, or vistior, whether or not they want their notifications on, and which lot is their preferred parking lot. 
### Report
The report.html page is where a user can write a message and choose to send it in as a report to Bowdoin security or the developers of this website. Which one they choose depends on the type of problem. They will then be taken to the reportconfirm.html page and return to the homescreen. 
### Help
The navhelp.html page is ideally going to have guides for how to complete certain functions, the option to contact the developers, and see frequently asked questions. The user would also be able to search for specific help if they are unsure of which category their need falls under. 
### Logging a spot (farley.html, admissions.html, coffin.html)
Farley, Admissions, and Coffin related pages are nearly identical. The only difference is that each page determines what category/parking lot our data will be saved in our local storage as. By opting to log a spot on the first page, it will take the user to the parking lot they have selected. Within the farley lot(farley.html), they will choose a number for their parking spot and it will be saved under the farley lot. 
### Confirmation (logconfirm.html)
After selecting the number, the user will be taken to logconfirm.html where a message is printed based on what spot they chose and/or whether or not it's open. If the spot is not open, the message will be altered to read that the spot is occupied. 
### Unlogging a spot
Just like how each parking lot had their own page to log a spot, each lot has their own page to unlog a spot. For example: farleyunlog.html. 
### Unlog confirmation (unlogconfirm.html)
This page uses the same logic as the confirmation page to display a message based on which spot the user opted to unlog and/or whether or not it was empty already. 
## Java Code
The java-code.js file holds functions for logging and unlogging a spot, saving user settings, and creating a list to keep track of logged parking spots.
### spot 
The spot function logs a spot based off the number the user has selected and the parking lot they are choosing from. The logic checks to see which lot the user is selecting from, and then goes on to check if the spot exists within the list of spots that are saved as logged. If the number exists within the list of occupied spots for that parking lot, the item "Spot" will be saved as a message indicating to the user that it is already occupied. If the spot is not already occupied, the message will be saved to show the user(on the next page) that they have successfully logged that spot. Additionally, the number will be added to the list of occupied spots for the designated lot. 
### unlog
The unlog function unlogs a spot based off the number the user has selected and the parking lot they are choosing from. This function uses very similar logic to the spot function. It first checks the lot input to see which lot the user is choosing from. Then, it checks if the spot is occupied or not. If it is already empty, the confirmation message will be saved to indicate to the user that the spot was already empty. If the spot is not empty, the message will be saved to indicate to the user(on the next page) that the action was successful. The list of occupied spots is then updated to have this spot removed. 
### setSetting
The setSetting function is called to effect when the user navigates to the settings page and wants to change their status as a student, faculty member, or visitor. The option(input) they select is their new setting. 
