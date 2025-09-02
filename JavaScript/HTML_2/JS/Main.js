function validateForm() {
    let X = document.forms["Form"]["fname"].value;
    if (X == "") {
        alert("Name must be filled out");
        return false
    }
}

