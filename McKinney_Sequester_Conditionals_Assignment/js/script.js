/* 	Name: Sequester McKinney
	Date: 4/21/15
	Assignment: Conditionals Assignment
*/

//calculate the volume of a right rectangular pyramid

//formula V = lwh/3

//get the base length, base width, pyramid height then divide by 3

//enter the base length
var length = prompt("Please enter the length");

//validates if the length value is blank.
if (length === "") {
	length = prompt("This field is blank.\n Please enter the length.")
} else {
	console.log("The length you entered is "+length);
}

//enter the base width
var width = prompt("Please enter the width");

//validates if the width value is blank.
if (width === "") {
	width = prompt("This field is blank.\n Please enter the width.")
} else {
	console.log("The width you entered is "+width);
}
//enter the pyramid height
var height = prompt("Please enter the height");

//validates if the height value is blank using ternary conditional
(height === "") ? height = prompt("This field is blank.\n Please enter the height.") : console.log("The height you entered is "+height)

//the constant base is 3
const base = 3;

//calculates the volume of a right rectangular pyramid
var volume = length * width * height / base;

//conditionals to determine what values have entered into the prompts
if(length === "5" && width === "6" && height === "8") {
	console.log("You have entered all the values to get a volume of 80.");

	//prints out the values the user entered and displays the final results.
	console.log("You entered the length "+length+" You entered the width "+ width+" You entered the height "+height+" The volume of a right rectangular pyramid is "+volume);
} else if (length === "4" && width === "6" && height === "7") {
	console.log("You have entered all the values to get a volume of 56.");
	//prints out the values the user entered and displays the final results.
	console.log("You entered the length "+length+" You entered the width "+ width+" You entered the height "+height+" The volume of a right rectangular pyramid is "+volume);
} else {
	//prints out the values the user entered and displays the final results.
	console.log("You entered the length "+length+" You entered the width "+ width+" You entered the height "+height+" The volume of a right rectangular pyramid is "+volume);
}

if (length === "2" && width === "3" && height === "4") {
	console.log("You have entered all the values to get a volume of 8.");
} else {
	console.log("Since you didn't enter 2, 3, and 4. \n You have enter length "+length+" width "+width+" and height "+height+" giving you a volume of "+volume);
}
	 

/*	I typed the values of 4, 6, and 7 and the result was 56.  This is correct after verifying */

/* I typed the values of 5, 6, and 8 and the result was 80.  This is correct after verifying */

/* I typed the values of 2, 3, and 4 and the result was 8.  This is correct after verifying */