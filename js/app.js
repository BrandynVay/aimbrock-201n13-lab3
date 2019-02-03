'use strict';

var guessingGameQuestions = [
  ['Is Aaron 6 ft tall?', true, 0],
  ['Is Aaron from Seattle?', true, 0],
  ['Does Aaron love West Seattle?', true, 0],
  ['Is Aaron\'s hair brown?', true, 0],
  ['Has Aaron lived in Alaska?', false, 0],
  // Math.floor(Math.random() * (max - min)) + min; 
  // The maximum is exclusive and the minimum is inclusive, thus range here is 1 - 10.
  ['Guess Aaron\'s favorite number! It\'s between 1 and 10', Math.floor(Math.random() * (11 - 1) + 1), 4, 0],
  ['Guess the other state\'s Aaron has lived in!',['michigan', 'ohio', 'new york', 'washington'], 6, 0]
];


var statesOfAmerica = ['alabama', 'alaska', 'american samoa', 'arizona', 'arkansas', 'california',
  'colorado', 'connecticut', 'delaware', 'district of columbia', 'federated states of micronesia',
  'florida', 'georgia', 'guam', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky',
  'louisiana', 'maine', 'marshall islands', 'maryland', 'massachusetts', 'michigan', 'minnesota',
  'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey',
  'new mexico', 'new york', 'north carolina', 'north dakota', 'northern mariana islands',
  'ohio', 'oklahoma', 'oregon', 'palau', 'pennsylvania', 'puerto rico', 'rhode island',
  'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virgin islands',
  'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];

var numbers1through10 = [];
for (var n = 1; n <= 10; n++) { 
  numbers1through10.push(n.toString()); 
}

var yesOrNo = ['yes', 'no'];
var guess = '';
var correctAnswer = null;
var whichQuestion = 0;
var totalCorrect = 0;

// Q1 - Q5
// Yes or No Questions, enforcing Yes or No responses
function questions0105(){
for (var j = 0; j < (guessingGameQuestions.length - 2); j++) {
  console.log('j: ',j);
  var myBool = null;
  console.log('myBool: ', myBool);

  correctAnswer = guessingGameQuestions[j][1];
  console.log('correctAnswer: ', correctAnswer);

  while (!yesOrNo.includes(guess)) {
    guess = prompt(guessingGameQuestions[j][0]);
    guess = guess.toLowerCase();

    if (guess === 'yes') {
      myBool = true;
    } else {
      myBool = false;
    }
  }
}

questions0105();


  // Console output: Question, users guess, users guess converted to bool
  console.log(guessingGameQuestions[j][0], guess, myBool);

  if (myBool === correctAnswer) {
    alert('Good guess!');
    guessingGameQuestions[j][2] = 1;
  } else {
    alert('No, that\'s wrong!');
  }
  guess = '';
}
console.log('guess value is:', guess);
// Q6 Favorite number question. Max 4 attempts.
// Enforces number input
functuion question06(){
whichQuestion = 5;
for (var j = 0; j < guessingGameQuestions[whichQuestion][2]; j++) {
  guess = '';
  
  console.log('Attempt X of 4: ', j + 1);
  correctAnswer = guessingGameQuestions[whichQuestion][1];

  while (!numbers1through10.includes(guess)) {
    guess = prompt(guessingGameQuestions[whichQuestion][0]);
    console.log('Guess number guess: ', guess);
  }

  // Question, answer, user's guess
  console.log(guessingGameQuestions[whichQuestion][0] + ' Answer: ' + correctAnswer + ' Guess: ' + guess);

  if (guess == correctAnswer) {
    alert('Good guess!');
    guessingGameQuestions[whichQuestion][3] = 1;
    break;
  } else if (guess > correctAnswer) {
    alert('Your guess is too high!');
  }
  else {
    alert('Your guess is too low!');
  }
}
}

question06();

// Q7 States I've lived in. Max 6 attempts.
// User guess must be a state or a territor
whichQuestion = 6;
function question07(){
for (var j = 0; j < guessingGameQuestions[whichQuestion][2]; j++) {
  guess = '';
  console.log('Attempt X of 6: ', j + 1);
  correctAnswer = guessingGameQuestions[whichQuestion][1];

  while (!statesOfAmerica.includes(guess)) {
    guess = prompt(guessingGameQuestions[whichQuestion][0]);
    guess = guess.toLowerCase();
    console.log('Guess statesOfAmerica: ', guess);
  }

  // Question, answer, user's guess
  console.log(guessingGameQuestions[whichQuestion][0] + ' Answer: ' + correctAnswer + ' Guess: ' + guess);

  if (correctAnswer.includes(guess)) {
    alert('Good guess!');
    guessingGameQuestions[whichQuestion][3] = 1;
    break;
  } else {
    alert('Nope. Try again!');
  }
}
}

question07();

for (var i = 0; i < guessingGameQuestions.length; i++) {
  totalCorrect += guessingGameQuestions[i][guessingGameQuestions[i].length-1];
}
console.log('Total correct: ', totalCorrect, ' out of ', guessingGameQuestions.length);
