//Call function
function my_Dictionary () {
    var Family = {
        Person1: "Mom",
        Person2: "Dad",
        Person3: "Daughter"
    };

//Deleting a Word (undefined)
delete Family.Person1;

//Display in HTML
    document.getElementById("Dictionary").innerHTML = Family.Person1;

}