/*
FILENAME: NEWSee.js
Date: 11/11/2017
Purpose: WHACK Fall 2017
*/


var headlineDate = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
	
//format info about time
var date = headlineDate.getDate();
var month = headlineDate.getMonth(); //add 1 because January is 0 for the computer
var year = headlineDate.getFullYear();
var headlineDateToday = monthNames[month] + ' ' + date + ", " + year

console.log(headlineDateToday)
	
document.getElementById("headlineDate").innerHTML =  headlineDateToday;



// Additional code for other functions may be added here.


