function Ride_Function() {
	var Height = parseInt(document.getElementById("Height").value);
    
    var Can_ride = (Height < 52) ? "You are too short" : "You  are tall enough";
	document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}
