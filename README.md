# PolarParking
## Pages
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
After selecting the number, the user will be taken to logconfirm.html where a message is printed based on what spot they chose and/or whether or not it's open. 
### Unlogging a spot
Just like how each parking lot had their own page to log a spot, each lot has their own page to unlog a spot. For example: farleyunlog.html. 
### Unlog confirmation (unlogconfirm.html)
This page uses the same logic as the confirmation page to display a message based on which spot the user opted to unlog and/or whether or not it was empty already. 
## Java Code
This file holds functions for logging and unlogging a spot, saving user settings, and creating a list to keep track of logged parking spots.
### spot 
The spot function logs a spot based off the number the user has selected and the parking lot they are choosing from. The logic checks to see which lot the user is selecting from, and then goes on to check if the spot exists within the list of spots that are saved as logged. If the number exists within the list of occupied spots for that parking lot, the item "Spot" will be saved as a message indicating to the user that it is already occupied. If the spot is not already occupied, the message will be saved to show the user(on the next page) that they have successfully logged that spot. Additionally, the number will be added to the list of occupied spots for the designated lot. 
### unlog
The unlog function unlogs a spot based off the number the user has selected and the parking lot they are choosing from. This function uses very similar logic to the spot function. It first checks the lot input to see which lot the user is choosing from. Then, it checks if the spot is occupied or not. If it is already empty, the confirmation message will be saved to indicate to the user that the spot was already empty. If the spot is not empty, the message will be saved to indicate to the user(on the next page) that the action was successful. The list of occupied spots is then updated to have this spot removed. 

### setSetting
The setSetting function is called to effect when the user navigates to the settings page and wants to change their status as a student, faculty member, or visitor. The option(input) they select is their new setting. 