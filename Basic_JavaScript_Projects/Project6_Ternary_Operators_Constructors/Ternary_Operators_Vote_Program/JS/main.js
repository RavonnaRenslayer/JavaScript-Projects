function Vote_Function() {
	var Age = parseInt(document.getElementById("Age").value);
    
    var Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
	document.getElementById("Vote").innerHTML= Can_vote + " to vote.";
}

