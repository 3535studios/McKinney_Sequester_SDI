/* 	Name: Sequester McKinney
	Date: 4/21/15
	Assignment: Conditionals Assignment
*/

//calculate the volume of a right rectangular pyramid

//formula V = lwh/3

//get the length, width, height then divide by 3

const base = 3;

//enter the length value
var length = prompt("This will calculate the volume of a right rectangular pyramid \n" + "Please enter the length.");

	//enter the length value and if the field is blank the prompt will ask for the length value
(length == '') ? prompt("Please enter the length.") : prompt("Please enter the width");

//enter the height value
var height = prompt("Please enter the height.");

var volume = length * width * height / base;


//prints out the values the user entered and displays the final results.
console.log("The length is "+length+" The width is "+ width+" The height is "+height+" The approximate volume of right rectangular pyramid is "+volume);

/*	I typed the values of 3, 4, and 5 and the result was 94.  This is correct after verifying */

/* I typed the values of 5, 6, and 8 and the result was 236.  This is correct after verifying */


