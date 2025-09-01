function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    switch (Animals) {
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
            break;
        
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
            break;

        case "Bird":
            Animal_Output = "Bird" + Animal_String;
            break;

        case "Lion":
            Animal_Output = "Lion" + Animal_String;
            break;

        case "Panda":
            Animal_Output = "Panda" + Animal_String;
            break;

        case "Fox":
            Animal_Output = "Fox" + Animal_String;
            break;

            default:
                Animal_Output = "Please enter an animal exactly as written on the above list.";
                document.getElementById("Output").innerHTML = Animal_Output;
             
    } 
}

//document.getElementsByClassName() Method
function ByClassName_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//Drawing a circle/drawing using <canvas> element
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250,125,100,0,2*Math.PI);
ctx.stroke();

ctx.fillStyle = "lightblue";
ctx.fill();

//Gradient Color, createLinearGradient() Method
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 100, 100);