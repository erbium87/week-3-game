
var	currentWord = "",
	userGuesses = "",  
	wrongGuesses = "", 
	totalGuesses = 0,
	totalWins = 0,
	sepWord = "",
	dashWord = "",
	currentInProgress = "",
	checkWord = false;
var wordGroup = ["lion-king", "aladdin", "mulan", "beauty-and-the-beast", "frozen", "bambi", "snow-white", "cinderella", "pinocchio", "dumbo", "pocahontas", "the-little-mermaid"];

//spacebar controls the refreshing of the chosen word
document.onkeyup = function(event){

    if(event.keyCode >= 65 && event.keyCode <= 91){
       	userGuesses = event.key;
       	userGuess();
	  document.getElementById("wrongGuesses").textContent = wrongGuesses;

    } else if (event.keyCode === 32 && !checkWord) {
	  currentWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
	  wrongGuesses = "";
document.getElementById("wrongGuesses").textContent = wrongGuesses;

      //build currentInProgress variable and fill with dashes
	  sepWord = currentWord.split("");
	  dashWord = currentWord.replace(/\w/g, "_");
	  currentInProgress = dashWord.split("");
document.getElementById("currentInProgress").textContent = currentInProgress.join(" ");
	
	// console.log(currentInProgress);
	// console.log(dashWord);
	// console.log(sepWord);
	totalGuesses = (Math.ceil(1.5 * currentWord.length));

 	document.getElementById("totalGuesses").textContent = totalGuesses;
    } 
      
}//end of onkeyup 

//code for user correct guess 
function userGuess() {

  var letterWrong = 0;	

  for (var i=0; i < currentWord.length; i++) {
	if (userGuesses === sepWord[i].toLowerCase()){
		currentInProgress.splice(i, 1, userGuesses);
		
	}
	else {
		letterWrong +=1;
	}
  } //end of for loop	

  if (letterWrong === currentWord.length) {
	wrongGuesses = wrongGuesses.concat(userGuesses);
	totalGuesses --;
		//decrement total guesses by 1
document.getElementById("totalGuesses").textContent = totalGuesses;
	}
document.getElementById("currentInProgress").textContent = currentInProgress.join(" ");
document.getElementById("wrongGuesses").textContent = wrongGuesses;

checkForStatus();
} //end of userGuess function

function checkForStatus() {
	if (totalGuesses === 0) {
		playLosingSound();
		alert("You lose");
		checkWord = false;
	} else if (currentInProgress.indexOf("_") > -1) {
		checkWord = true;
	} else {
		playWinningSound();
		alert("You Win! Press OK then spacebar to continue");
		totalWins ++;
		checkWord = false;
	}
document.getElementById("totalWins").textContent = totalWins;
}

function playWinningSound() {
		document.getElementById("soundWin").play();
	}
function playLosingSound() {
		document.getElementById("soundLoss").play();
	}


