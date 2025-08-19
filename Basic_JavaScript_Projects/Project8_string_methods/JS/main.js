//concat Method
function full_Sentence () {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence, using the concat() method.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice Method
function slice_Method() {
    var Sentence = "In this sentence the slice() method is being used.";
    var Section = Sentence.slice(21, 35);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase Method
function UpperCase() {
    let text = document.getElementById("toUpperCase").innerHTML;
    document.getElementById("toUpperCase").innerHTML = text.toUpperCase();
}

//search Method
function search_Method () {
    let text="Locate where 'locate' occurs!";
    let index=text.search("locate");
    document.getElementById("Search").innerHTML = index;
}

//Number Method
function string_Method() {
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();
}

//toPrecision Method
function precision_Method() {
    var X= 12938.3012987376112;
    document.getElementById("Precision").innerHTML= X.toPrecision(10);
}

//toFixed Method
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("toFixed").innerHTML = n;


// valueOf Method
// String() converts different values to a string representation

let myArray = ['a', 'b', 'c'];
    console.log(myArray.join(''));   // "abc" (join array elements into a string)
    console.log(String('A'));        // "A"
    console.log(String(true));       // "true"
    console.log(String(4.5));        // "4.5"
    console.log(String(5.2));        // "5.2"
    console.log(String(12));         // "12"
    console.log(String(1400n));      // "1400" (BigInt for large integers)
