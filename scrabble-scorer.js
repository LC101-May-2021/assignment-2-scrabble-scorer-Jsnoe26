// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const theVowels = {
  3: ["A", "E", "I", "O", "U"]
};



const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }

	  }
	}
	return letterPoints;
 }



// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt(word) {
let scoreCounter;
console.log("Let's play some scrabble! Enter a word:");
word = input.question("Enter a word to score: ");
console.log("\n");
scoreCounter = oldScrabbleScorer(word);
simpleScore = function (word);
vowelBonusScore = function (word);

console.log("Vowel Points: " + vowelBonusScore);
console.log(scoreCounter);

};



function vowelBonusScore(word) {
  let letterPoints = 0;
  for (let i = 0; i <= word.length; i++) {
 if (word[i] == theVowels[i]) {
			letterPoints += 3;
     } else {
       letterPoints += 1;
     }
} 
  return letterPoints;
}




let simpleScore = function (word) {
  console.log(" Total Score: " + word.length);
  console.log("___________");
  return word.length;
}


let vowelBonusScore = function(word) {
  let letterPoints = 0;
  for (let i = 0; i <= word.length; i++) {
 if (word[i] == theVowels[i]) {
			letterPoints += 3;
     } else {
       letterPoints += 1;
     }
} 
  return letterPoints;
}




let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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

