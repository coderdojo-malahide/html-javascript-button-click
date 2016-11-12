/*
	The init function below is called in the '<body onload="init">' in the html.
*/

function init() {
	/*
		This function adds the onclick behaviour to the button with the 'id="plant-cookie-button"'
	*/

	// Loads the button into the theButton variable, so that we can use it later.
	var theButton = document.getElementById("the-button");

	// Uses a method called "addEventListener" with
	// a type of "click" to launch the buttonAction function. 
	// See how it's used on the "theButton" variable we made earlier.
	theButton.addEventListener("click", buttonAction);

}

function buttonAction() {

	alert("button clicked");
}