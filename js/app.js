'use strict';

var userName = prompt('What is your name?');
alert(userName + ', let\'s play a game to learn about Aaron.');
// ['Question', corroct answer as bool, user response]
var guessingGameQuestions = [
  ['Is Aaron 6 ft tall? Yes or No:', true, 0],
  ['Is Aaron from Seattle? Yes or No:', true, 0],
  ['Does Aaron love West Seattle? Yes or No:', true, 0],
  ['Is Aaron\'s hair brown? Yes or No:', true, 0],
  ['Has Aaron lived in Alaska? Yes or No:', false, 0],
];

var yesOrNo = ['yes', 'no', 'y', 'n'];
var guess = '';
var correctAnswer = null;
var totalCorrect = 0;

// Q1 - Q5
// Yes or No Questions, enforcing Yes or No responses
for (let i = 0; i < (guessingGameQuestions.length); i++) {
  console.log('Number Correct: ', i);
  var myBool = false;

  correctAnswer = guessingGameQuestions[i][1];

  while (!yesOrNo.includes(guess)) {
    guess = prompt(guessingGameQuestions[i][0]);
    guess = guess.toLowerCase();

    if (guess === 'yes' || guess === 'y') {
      myBool = true;
    } else {
      myBool = false;
    }
  }

  if (myBool === correctAnswer) {
    alert('Good guess!');
    guessingGameQuestions[i][2] = 1;
  } else {
    alert('No, that\'s wrong!');
  }

  console.log('Q: '+ guessingGameQuestions[i][0] + ' Guess: ' + guess);

  guess = '';
}

for (var i = 0; i < guessingGameQuestions.length; i++) {
  totalCorrect += guessingGameQuestions[i][guessingGameQuestions[i].length-1];
}
console.log('Total correct: ', totalCorrect, ' out of ', guessingGameQuestions.length);
