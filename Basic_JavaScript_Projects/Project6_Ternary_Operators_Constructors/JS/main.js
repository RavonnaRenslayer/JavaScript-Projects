function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Heith < 52) ? "You are too short" : "You  are tall enough.";
	document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}
