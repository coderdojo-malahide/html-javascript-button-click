/*
	The init function below is called in the '<body onload="init">' in the html.
*/

function init() {
	/*
		This function adds the onclick behaviour to the button with the 'id="plant-cookie-button"'
	*/

	// Loads the button into the theButton variable, so that we can use it later.
	var theButton = document.getElementById("the-button");

	// Uses an onclick
	theButton.addEventListener("click",addCookie);

}

function addCookie() {

	alert("button clicked");
}