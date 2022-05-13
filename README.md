# CSUF-CPSC349-SecretSantaProject
Secret Santa Project for the individual project for this class.


The plan for this project was to create a website using nodejs, express, and mongodb.

There are 4 main pages: index.html, account.html, event.html, result.html

## index.html
The person should be able to enter a username and password and click on the submit button. The backend should look into the database to see if the usesrname and password matches. 
1) If it matches then it leads to the next webpage.
2) If no match is found then the username and password will be added into the database and will lead to the next webpage
## account.html
This page should have 2 things:
1) A hyperlink of group name that has been made under that account already. The hyperlink would then lead to the result page
2) A button that leads to the event webpage that allows the user to input a group name and the memebers of the group.
## event.html
This webpage would have inputs for the Event title name and inputs for 10 members that will be participating in that group. The "Draw Names" button would gather all the members name and then shuffle in an array. After the shuffle, the names will be paired without people having duplicate or the same names. The page will then redirect to the result page.
## result.html
This is a simple page where it would show the result of the shuffling and pairing of names for the gift exchange. There is a button that would then allow the user to go back to their account page.
