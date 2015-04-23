/* 	Name: Sequester McKinney
	Date: 4/21/15
	Assignment: Conditionals Assignment
*/

//calculate the volume of a right rectangular pyramid

//formula V = lwh/3

//get the base length, base width, pyramid height then divide by 3

//enter the base length
var length = prompt("Please enter the length");
if (length === "") {
	length = prompt("This field is blank.\n Please enter the length.")
} else {
	console.log("The value of this field "+length);
}

//enter the base width
var width = prompt("Please enter the width");

//validates if the width value is blank.
if (width === "") {
	width = prompt("This field is blank.\n Please enter the width.")
} else {
	console.log("The value of this field "+width);
}
//enter the pryamid height
var height = prompt("Please enter the height");

//validates if the height value is blank.
(height === "") ? height = prompt("This field is blank.\n Please enter the height.") : console.log("The value of this field "+height)

//the constant base is 3
const base = 3;

//calculates the volume of a right rectangular pyramid
var volume = length * width * height / base;


//prints out the values the user entered and displays the final results.
console.log("You entered the length "+length+" You entered the width "+ width+" You entered the height "+height+" The volume of a right rectangular pyramid is "+volume);

/*	I typed the values of 4, 6, and 7 and the result was 56.  This is correct after verifying */

/* I typed the values of 5, 6, and 8 and the result was 236.  This is correct after verifying */