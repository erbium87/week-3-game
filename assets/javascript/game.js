var currentInProgress = "", 
	currentWord = "",
	userGuesses = [],  //Not sure if need this var
	wrongGuesses = [], //use wrongGuesses.push("test"); when needing to add
	totalGuesses = 0,
	totalWins = 0,
	letterUsed = false;
var wordGroup = ["lionking", "aladdin", "mulan", "beautyandthebeast", "frozen"];

//spacebar controls the refreshing of the chosen word
document.onkeyup = function(event){
    if(event.keyCode == 32){
		currentWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
    	currentInProgress = "";
        createWord();
    }
    else {
    	userGuess();
    	userGuesses = event.key;
    	console.log(userGuesses);
    } 
}

function createWord() {
	//build currentInProgress variable and fill with dashes
	for (var i = 1; i < currentWord.length; i++) {
		currentInProgress = currentInProgress.concat("-");
	}
	//insert the dashes into the html
	document.getElementById("currentInProgress").textContent = currentInProgress;
}


//code beginning on my own so could be using wrong variables

//code for user correct guess 
function userGuess() {
	
	for (var i=0; i < currentInProgress.length; i++){

	

	if (userGuesses.indexOf(currentInProgress[i]) === -1){
		currentInProgress.replace(/"-"/g, userGuesses);
	}


}}

//letterUsed is set to false so not my letter used literally

	



// document.onkeyup = function(event){


// if (userGuesses == wrongGuesses) {
// 	alert ("letter has been used");
// }
// else {
// 	for (var i = 0; i < currentInProgress.length; i++) {
// 		if (userGuesses === currentInProgress[i]){
// 			//replace letter in string
// 			letterUsed == true;
// 		}
// 			totalGuesses ++;
// 	}
// }
// 	document.getElementById("currentInProgress").textContent = currentInProgress;
// }





// line added in from class to maybe help?
// currentInProgress.split("");

// for (var i=0; i<currentInProgress.length; i++);
// 	console.log(currentInProgress[i]);