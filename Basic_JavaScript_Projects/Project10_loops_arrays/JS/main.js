// While Loop//
function Call_Loop() {
    var Digit="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
            document.getElementById("Loop").innerHTML= Digit;
}

//String Length
let text = "The length property returns the length of a string"
let length = text.length;
    document.getElementById("String_Length").innerHTML = length;

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";

    function for_Loop() {
        Content = "";
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

//Arrays and Objects
function cat_color() {
    var Cat_Colors = ["White", "Black", "Black and White", "Grey"]
   
        document.getElementById("Cat").innerHTML = "Cat number 3 is " + 
        Cat_Colors[2] + ".";
}

//Const Keyword
function constant_function() {
    const People = {Name: "Jane Doe", Age: "25", Height:"187cm"};
    People.Age= "27";
    People.Height= "188 cm"
        document.getElementById("Name").innerHTML = "This person is now " + People.Age + " and is " + People.Height + " tall.";
}


//Let Keyword is block scoped, so it cannot be accessed outside of {}.
document.body.innerHTML += "<p>Variables declared within a function with var or let have function scope (can be accessed within a function but not outside of it).</p>";

var X = 82;
document.write(X);
{
        let X = 33;
        document.write("<br>" + X);
}
document.write("<br>" + X);

//Var Keyword is function scoped, so it does leak out of {}.
var X = 82;
document.write("<br><br>" + X);
{
        var X = 33;
        document.write("<br>" + X);
}
document.write("<br>" + X);

//Return Statement stops the execution of a function and returns a value.
function myFunction(name) {
        return "Hello " + name;
    }

document.getElementById("Return_Statement").innerHTML= myFunction("John");

//Object 
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.description();

//Break Statement
//When break is encountered in a loop, the loop terminates immediately.

let text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; 
    }
    text += "The number is " + i + "<br>";
}
document.getElementById("Break_Statement").innerHTML = text;
