const readLineSync = require('readline-sync');

//score update
var score = 0;

//taking username
const username = readLineSync.question('What Is Your Name? TYPE HERE: ');
console.log('--------------');
console.log('--------------');
//calling username
console.log(`Welcome! ${username}, If you are a true cricket fan you are gonna love this quiz.`);
console.log('--------------');
console.log('--------------');

const favTeam = readLineSync.question('Which is your fav IPL team? TYPE HERE: ');
console.log('--------------');
console.log('--------------');

//calling fav team of user
var myFavTeam = 'rcb';
if(favTeam.toLowerCase() === myFavTeam) {
  console.log('Whoh! We have similar choices.')
} else {
  console.log(`${favTeam} is a good team`);
}
console.log('--------------');
console.log('--------------');

//question list
let questionList = [
  {
    question: 'When did IPL started?',
    answer: '2008'
  },

  {
    question: 'Who won the inaugural session of IPL?',
    answer: 'rajasthan royals'
  },

  {
    question: 'Which team won the most number of titles so far in IPL?',
    answer: 'mumbai indians'
  },

  {
    question: 'Which player scored most runs in IPL so far?',
    answer: 'virat kohli'
  },

  {
    question: 'Who holds the record of highest individual score in IPL?',
    answer: 'chris gayle'
  },

  {
    question: 'Which player holds the record of hitting 4 centuries in a single season?',
    answer: 'virat kohli'
  },

  {
    question: 'Which player had taken most wickets in ipl so far?',
    answer: 'lasith malinga'
  },

  {
    question: 'Who won the emerging player award last year?',
    answer: 'devdutt paddikal'
  },

  {
    question: 'Which player won the orange cap last season?',
    answer: 'kl rahul'
  },

  {
    question: 'Are you EXCITED about remaining IPL this year?',
    answer: 'yes'
  }
  
]


function playGame (questionNumber, question, answer) {

  console.log(`${questionNumber}. ${question}`);
  let userAnswer = readLineSync.question('Write your answer here: ');

  if(userAnswer.toLowerCase() === answer) {
    console.log('You are right');
    score++;
  } else {
    console.log('You are wrong!')
  }
  console.log('--------------');
}

function getValue() {
  var questionNumber = 0;

  for(let i = 0; i < questionList.length; i++) {
    questionNumber++;
    let myQuestion = questionList[i];
    playGame(questionNumber, myQuestion.question, myQuestion.answer);
  }
}

getValue();
console.log('--------------');

//giving badges
if (score >= 7) {
  console.log('Wow! You truely a IPL fan.')
} else if (score <= 6 && score >= 4) {
  console.log('Ah! You know about IPL, but little.');
} else {
  console.log("Unfortunately! You don't seem like a true IPL fan.");
}

console.log('--');
console.log(`Your score is ${score}. Well Played!`);