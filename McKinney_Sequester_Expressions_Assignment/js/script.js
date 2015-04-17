/* 	Name: Sequester McKinney
	Date: 4/16/15
	Assignment: Expressions Assignment
*/

//calculate the surface area of a Right rectangular prism

//formula A = 2(wl+hl+hw)

//get the length, width, and height from users

//enter the length value
var length = prompt("This will calculate the surface area of a right rectangular prism \n" + "Please enter the length.");

//enter the width value
var width = prompt("Please enter the width.");

//enter the height value
var height = prompt("Please enter the height.");

var prompts = [length, width, height];

//calculates length times width
var twoAB = prompts[0] * prompts[1] * 2;

//calculates length times height
var twoBC = prompts[0] * prompts[2] * 2;

//calculates width times height
var twoAC = prompts[1] * prompts[2] * 2;

//calcuates the surface area of the right rectangular prism
var area = twoAB + twoBC + twoAC;

console.log("The length is "+length+" The width is "+ width+" The height is "+height+" The surface area of the Right rectangular prism is "+area);

/*	I typed the values of 3, 4, and 5 and the result was 94.  This is correct after verifying */

/* I typed the values of 5, 6, and 8 and the result was 94.  This is correct after verifying */
  	
