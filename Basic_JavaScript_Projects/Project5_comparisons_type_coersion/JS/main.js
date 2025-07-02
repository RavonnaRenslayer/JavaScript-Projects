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