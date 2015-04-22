/* 	Name: Sequester McKinney
	Date: 4/21/15
	Assignment: Conditionals Assignment
*/

//calculate the volume of a right rectangular pyramid

//formula V = lwh/3

//get the base length, base width, pyramid height then divide by 3

//the constant base is 3
const base = 3;

//enter the base length
var length = prompt("This will calculate the volume of a right rectangular pyramid \n" + "Please enter the length.");

	//enter the length value and if the field is blank the prompt will ask for the length value
length = (length == '' || 'null') ? prompt("This field can't be blank.  Please enter the length.") : prompt("Please enter the width");

//enter the base width
var width = prompt("Please enter the width.");

if (width != '' || 'null') {
	//the pyramid height
	var height = prompt("Please enter the height.");
} else if (height == '' || 'null') {
	var height = prompt("This field can't be blank. Please enter the height.");
} else {
	//calculates the volume of a right rectangular pyramid
	var volume = length * width * height / base;
}
//validates that all fields have values
if (length == ''|| 'null' || width == ''|| 'null' || height == ''|| 'null') {
	console.log("This caluclation will not be correct because one of the fields is blank.  Please refresh the page and try again.")
} else {
	//prints out the values the user entered and displays the final results.
console.log("You entered the length "+length+" You entered the width "+ width+" You entered the height "+height+" The volume of a right rectangular pyramid is "+volume);
}




/*	I typed the values of 4, 6, and 7 and the result was 56.  This is correct after verifying */

/* I typed the values of 5, 6, and 8 and the result was 236.  This is correct after verifying */


