//Subtraction
window.onload = function () {

    function subtract(p1, p2) {
     return p1 - p2;
}


//Multiplication
function multiply(p1, p2) {
     return p1 * p2;
}


//Division
function divide(p1, p2) {
     return p2 !== 0 ? p1 / p2: "Cannot divide by zero";
}


//Multiple Operation
function more_Math() {
    return (1 + 2 * 10 / 2 -5);
}

//Modulus Operation
function modulus_Operator(p1, p2) {
    return p1 % p2;
}


//Unary Operation
function negation_Operator() {
    let x = 10;
    return -x;
}

//Increment
function increment_Operator() {
    let x = 5;
    x++;
    return x;
}

//Decrement
function decrement_Operator() {
    let x = 5;
    x--;
    return x;
}

//Random
function random_Operator() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
}

//Log to console
console.log(negation_Operator());
console.log(modulus_Operator(25, 6));
console.log(Math.random());
console.log(Math.PI);

//Values
    let result = more_Math();
    let simple_Math = modulus_Operator(25, 6);
    let unary = negation_Operator();
    let increment = increment_Operator();
    let decrement = decrement_Operator();

//Display in HTML
    document.getElementById("Subtraction").innerHTML = "Subtraction: " + subtract(3, 1);
    document.getElementById("Multiplication").innerHTML = "Multiplication: " + multiply(3, 1);
    document.getElementById("Division").innerHTML = "Division: " + divide(3, 1);
    document.getElementById("MultipleOperators").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + result;
    document.getElementById("ModulusOperator").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
    document.getElementById("UnaryOperator").innerHTML = "Unary negation of 10 is: " + unary;
    document.getElementById("IncrementOperator").innerHTML = "Incrementing 5 gives: " + increment;
    document.getElementById("DecrementOperator").innerHTML = "Decrementing 5 gives: " + decrement;
    document.getElementById("RandomOperator").innerHTML = "Random number (1–100): " + Math.floor(Math.random() * 100 + 1);

//Math.Random
window.alert(Math.random());
window.alert(Math.random() * 100);

}