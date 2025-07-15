//"Type Of"
document.write(typeof "word");

//Type Coersion 
document.write("10" + 5);

//NaN True
document.getElementById("True").innerHTML = isNaN('This is a string');

//NaN False
document.getElementById("False").innerHTML = isNaN('007');

// Assigning a large positive number
document.getElementById("PositiveInfinity").innerHTML = 2E310;  // 2 x 10^310 → Infinity

// Assigning a large negative number
document.getElementById("NegativeInfinity").innerHTML = -3E310; // -3 x 10^310 → -Infinity

// Boolean logic using comparison operators
let a=10;
let b=5;

//Boolean statement
document.getElementById("BooleanTrue").innerHTML = "Is 10 higher than 5? " + (a > b);

document.getElementById("BooleanFalse").innerHTML = "Is 10 less than 5? " + (a < b);

//console.log() Method
// Perform a math operation and log the result
console.log(2 + 2); // Output: 4

//Display “false” in the console using Boolean logic and the console.log() method.
console.log(11 < 9); // Output "false"

//Double Equal Signs
window.onload = function () {
    console.log("Script loaded and DOM is ready.");
    let result = (5 == "5");
    document.getElementById("DoubleEqualSigns").innerHTML = result;
};

//Triple Equal Signs
document.getElementById("StrictTrue").innerHTML =
    "10 === 10 " + (10 === 10);  

document.getElementById("StrictFalse1").innerHTML =
    "'5' === 10 " + ('10' === 10);

document.getElementById("StrictFalse2").innerHTML =
    "'10' === 10 " + ('10' === 10);

document.getElementById("StrictFalse3").innerHTML =
    "10 === 20 " + (10 === 20);

//And Operators
document.getElementById("AndOperatorTrue").innerHTML = "The result of 10 equals 10 and 10 is greater than 9 is = " +
    (10 == 10 && 10 > 9);

document.getElementById("AndOperatorFalse").innerHTML = "The result of 10 equals 10 and 9 is greater than 10 is = " +
    (10 == 10 && 10 < 9);

//Or Operators
document.getElementById("OrOperatorTrue").innerHTML = "The result of 10 is greater than 4 is  = " +
    (5 > 10  || 10  > 4);

document.getElementById("OrOperatorFalse").innerHTML = "The result of 10 is greater than 20 is  = " +
    (5 > 10  || 10  > 20);

//Not Operator
function not_Function () {
	document.getElementById("Not").innerHTML = ! (20 > 10);
}

function not_Function () {
	document.getElementById("Not").innerHTML = ! (5 > 10);
}