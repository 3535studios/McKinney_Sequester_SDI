/* 	Name: Sequester McKinney
	Date: 4/21/15
	Assignment: Conditionals Assignment
*/

//calculate the volume of a right rectangular pyramid

//formula V = lwh/3

//get the base length, base width, pyramid height then divide by 3

//enter the base length
var length = prompt("Please enter the length");

//enter the base width
var width = prompt("Please enter the width");

//enter the pryamid height
var height = prompt("Please enter the height");

//the constant base is 3
const base = 3;

var volume = length * width * height / base;


//prints out the values the user entered and displays the final results.
console.log("You entered the length "+length+" You entered the width "+ width+" You entered the height "+height+" The volume of a right rectangular pyramid is "+volume);

//validates that all fields have values
(length === '' || width === '' || height === '') ? console.log("This caluclation will not be correct because at least one of the fields is blank.  Please refresh the page and try again.") : volumeCalc = length * width * height / base;

/*	I typed the values of 4, 6, and 7 and the result was 56.  This is correct after verifying */

/* I typed the values of 5, 6, and 8 and the result was 236.  This is correct after verifying */