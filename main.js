function displayLevelInfo() {
	var levelEntry = document.getElementbyId('levelInput').value;

		switch (levelEntry) {
			case "1": 
				document.getElementById("displayLevel").innerHTML=
				"Level: Easy Mode";
				break;

			case "2": 
				document.getElementById("displayLevel").innerHTML=
				"Level: Normal Mode";
				break;

			case "3": 
				document.getElementById("displayLevel").innerHTML=
				"Level: Hard Mode";
				break;

			default:
				window.alert("Not a Number");
			}
}
