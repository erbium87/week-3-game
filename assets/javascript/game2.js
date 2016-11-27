
var	currentWord = "",
	userGuesses = "",  //Not sure if need this var
	wrongGuesses = [], //use wrongGuesses.push("test"); when needing to add
	totalGuesses = 0,
	totalWins = 0,
	letterUsed = false;
	sepWord = "",
	dashWord = "",
	currentInProgress = "";
var wordGroup = ["lion king", "aladdin", "mulan", "beauty and the beast", "frozen"];

//currentInProgress as variable for .length didn't change it either
if (currentWord.length <= 5) {
		totalGuesses = 9;
	} else if (currentWord.length > 5 && currentWord.length<= 10) {
		totalGuesses = 14;
	} else {
		totalGuesses = 19;
	}
document.getElementById("totalGuesses").textContent = totalGuesses;

// console.log(currentInProgress);
// console.log(dashWord);
// console.log(sepWord);

//spacebar controls the refreshing of the chosen word
document.onkeyup = function(event){

    if(event.keyCode == 32){
		currentWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
    	
      //build currentInProgress variable and fill with dashes
	  sepWord = currentWord.split("");
	  dashWord = currentWord.replace(/\w/g, "-");
	  currentInProgress = dashWord.split("");

	  document.getElementById("currentInProgress").textContent = currentInProgress;

    }
    else {
       	userGuesses = event.key;
       	userGuess();

    	// console.log(userGuesses);
    } 
}

//code for user correct guess 
function userGuess() {
	
  for (var i=0; i < currentWord.length; i++) {

	if (userGuesses === sepWord[i].toLowerCase()){
		currentInProgress.splice(i, 1, userGuesses);
		// console.log(currentInProgress);
	}

	else if (currentInProgress === currentWord){
		//if all dashes gone, you win! add to total wins

		alert("You Win!");
		// add code to hold onto wrongGuesses and subtract from total allowed

	}
	
	// add else? can I have the wrongGuesses go here? if it's not in the currentInProgress it goes here and writes out to page and reduces totalGuesses by one. 
	else if (userGuesses === wrongGuesses){
		alert("Letter has been used, select a different letter");

	}
	else {
		wrongGuesses
	}
  }		

document.getElementById("currentInProgress").textContent = currentInProgress;
document.getElementById("wrongGuesses").textContent = wrongGuesses; 

}

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