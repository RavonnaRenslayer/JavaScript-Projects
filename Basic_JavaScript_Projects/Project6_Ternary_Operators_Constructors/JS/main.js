//Tenary Operators
function Ride_Function() {
	var Height = parseInt(document.getElementById("Height").value);
    
    var Can_ride = (Height < 52) ? "You are too short" : "You  are tall enough";
	document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

// Keywords Program
// Constructor function using `this` and `new`
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Function called when button is clicked
function displayinfo() {
    var person1 = new Person("Alice", 30);
    document.getElementById("New_and_This").innerHTML = 
    person1.name + " is " + person1.age + " years old.";
}

// Reserved word test using eval
function reservedWordTest () {
    try {
        eval("var for = 'test';");
    } catch (error) {
        document.getElementById("Reserved_Word_Output").innerHTML = 
            "Error: " + error.message;
    }
}

// Constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function showBook() {
    var book1 = new Book ("1984", "George Orwell", 1949);
    document.getElementById("Book_Output").innerHTML = 
        book1.title + " by " + book1.author + " (" +book1.year + ")";
}

// Nested Function
function outerFunction() {
    function innerFunction() {
        return "Hello from nested function!";
    
    }
    return innerFunction();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Nested_Function").innerHTML = outerFunction();
});
