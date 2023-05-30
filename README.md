# FakeOS-Project

## Requirements / Purpose

-   Create a fake OS as a single page application (SPA), using javascript, HTML and SCSS
-   Chose to base mine on Windows XP, attempted to keep the styling of the 'desktop' to resemble Windows XP
-   Needed to contain 3 'apps' that can be opened and closed, a start menu, and the current time displayed as a 'computer clock'
-   Created during Nology training program to explore and familiarise ourselves with the use of javascript and especially the DOM

---

## Design Goals / Approach

-   The main goal was to understand and use the DOM, to create a realistic and pleasant to use SPA resembling an OS
-   User experience was considered to be important, despite the lack of actual functionality for 'apps' 
-   'App' functionality was not a priority, but was necessary to be able to open and close them, preferably with an X button
-   Code still contains commented out previous iterations of using the DOM, which initially created and placed the entire contents of each app
-   After some guidance from the Nology coaches, decided to simply hide and display the contents of the 'app' instead
-   Also initially tried to separate logic into separate javascript and DOM files, but ended up only needing to use the DOM

---

## Features

-   Can open the start menu, rows are highlighted when hovered (clicking doesn't lead anywhere)
-   Clicking icons on the 'desktop' opens the 'app' 
-   Clicking on X button closes the 'app', clicking the 'desktop' icon again also closes the 'app'
-   Notepad opens a textbox area, able to type within it, is stored even if the app is closed
-   Internet Explorer opens a simple 'form' that returns a message on submission
-   Placekitten opens up a cute picture of a kitten
-   Current time is displayed on bottom right corner

---

## Known issues

-   Contains commented out code, left in as a reminder of previous iterations attempted
-   Internet explorer 'app' doesn't display the actual input message, only a default message

---

## Future Goals

-   Add a new 'app' with other functionality
-   Improve functionality of 'internet explorer', to be more responsive and/or resemble actual Google home page
-   Implement working 'minimise' and 'maximise' buttons, with a display in the taskbar as well

---

icons source (requires attribution)
https://www.flaticon.com/free-icon/notepad_686234
https://www.flaticon.com/free-icon/internet-explorer_220213

https://icons8.com/icon/ezj3zaVtImPg/visual-studio
https://icons8.com/icon/s5NUIabJrb4C/settings
https://icons8.com/icon/WbRVMGxHh74X/console
https://icons8.com/icon/vh41fDz8FQSM/downloads-folder
https://icons8.com/icon/sq28X7xfmaiu/documents-folder
https://icons8.com/icon/Jw9nt2gzEivq/windows-explorer
https://icons8.com/icon/ruLDJHLUddtV/important-mail
https://icons8.com/icon/23537/close-window

