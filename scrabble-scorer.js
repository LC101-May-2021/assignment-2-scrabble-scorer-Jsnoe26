// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const theVowels =  ["a", "e", "i", "o", "u"];


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


let inputWord = "";
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let pointValueTotal = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      pointValueTotal += Number(pointValue);
		 }

	  }
	}
  return pointValueTotal;
	//return letterPoints;
 }



// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {
//let scoreCounter;
console.log("Let's play some scrabble! Enter a word:");
inputWord = input.question("Enter a word to score: ");
console.log("\n");
inputWord = inputWord.toLowerCase();

//scoreCounter = oldScrabbleScorer(inputWord);

//console.log("Vowel Points: " + vowelBonusScore);
//console.log(scoreCounter);
//console.log(word);
};



let simpleScore = function (word) {
 // console.log(" Total Score: " + word.length);
 // console.log("___________");
  return word.length;
}


let vowelBonusScore = function(word) {
  let letterCounts = 0;
  for (let i = 0; i < word.length; i++) {
 if (theVowels.includes(word[i])) {
			letterCounts += 3;
     } else {
       letterCounts += 1;
     }
} 
  return letterCounts;
}




let scrabbleScore = function(word) {
  //let letterPoints = "";
  let total = 0;
  //console.log(typeof (total));
  //console.log(newPointStructure);
	for (let i = 0; i < word.length; i++) {
 
	 // for (const pointValue in newPointStructure) 
 //console.log(word[i]);
		// if (pointValue === word[i]) 
      total += newPointStructure[word[i]];
    //console.log(total);
	}
  return total;

}

let objectSimple = {
  name: "Simple Score",
  description: "Each letter worth 1 point",
  scoringFunction: simpleScore
}

let objectVowelBonus = {
  name: "Vowel Bonus Score",
  description: "Vowels are 3 pts Consonants are 1 pt.",
  scoringFunction: vowelBonusScore
}

let objectScrabble = {
  name:"Scrabble Score",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}


const scoringAlgorithms = [objectSimple, objectVowelBonus, objectScrabble];

function scorerPrompt() {
  let userInput = input.question("Which scoring algorithm would you like to use? 0 , 1 or 2? ");
  console.log("                                 ");
  console.log("0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system");
  userInput = Number(userInput);
  //console.log(userInput);
  return scoringAlgorithms[userInput];
}

function transform(oldTrans) {
  let newObj = {};
  let newKey;
  let newValue;
  for ( const pointValue in oldTrans) {
    let newValue = pointValue;
  for ( let i = 0; i < oldTrans[pointValue].length; i++) {
      newKey = oldTrans[pointValue][i].toLowerCase();
      newObj[newKey] = Number(newValue);
  }
  }

  return newObj;
}


let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt(); 
   let selectedObject = scorerPrompt();
  //console.log(inputWord);
  //console.log(selectedObject);
  let finalScore = selectedObject.scoringFunction(inputWord);
  console.log("________________________________");
  console.log(" Score for " + inputWord.toUpperCase() + ": " + finalScore);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

