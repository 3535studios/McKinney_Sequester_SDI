/* 	Name: Sequester McKinney
	Date: 4/30/15
	Assignment: Functions Assignment
*/

//calculate compound annual growth rate for investments (cagr)

//formula ((current value/initial value)^(1/n))-1

//enter the initial value of the investment
var currentValue = prompt("Please enter the current value of your investment");

// while loop to validate the current value prompt
while (currentValue == "") {
	currentValue = prompt("This field can not be blank. \n Please enter the current value of your investment.")
}

//enter the initial value of the investment
var initialValue = prompt("Please enter the initial ");

// while loop to validate the initial value prompt
while (initialValue == "") {
	initialValue = prompt ("This field can not be blank. \n Please enter the intial value of your investment.")
}

//enter the initial value of the investment
var numOfYears = prompt("Please enter the number of years you have had the investment.");

// while loop to validate the number of years prompt
while (numOfYears == "") {
	numOfYears = prompt("This field can not be blank. \n Please enter the number years you have had the investment.")
}

// function to perform calculation for cagr
var results = ((currentValue/initialValue)Math.pow(1/numOfYears))-1;
console.log("The compound annual growth rate on your investment is " + myCAGR);

/*
// normal function
var myCAGR = CAGR(5000,10000,12);
function CAGR(currentValue,initialValue,numOfYears) {
	// final results of calculation
	var results = ((currentValue/initialValue)Math.pow(1/numOfYears))-1;
	return results;
}
console.log("The compound annual growth rate on your investment is " + myCAGR); */

// anonymous function
/* var finalCal = function CAGR(currentValue,initialValue,numOfYears) {
	// final results of calculation
	var results = ((currentValue/initialValue)exp(1/numOfYears))-1;
 	return results;
}

console.log("The compound annual growth rate on your investment is " + results); */


/*	I typed the values of 5000, 10000, and 12 and the result was 56.  This is correct after verifying */

/* I typed the values of 15000, 20000, and 10 and the result was 80.  This is correct after verifying */

/* I typed the values of 20000, 50000, and 8 and the result was 8.  This is correct after verifying */