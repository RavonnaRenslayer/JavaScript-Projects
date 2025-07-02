window.onload = function () {
    function myFunction(p1, p2) {
     return p1 * p2;
}

let result = myFunction(3, 1);
document.getElementById("Math").innerHTML = result;
};