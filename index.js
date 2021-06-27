const readLineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

//score update
var score = 0;

//taking username
const username = readLineSync.question(chalk.cyanBright('What Is Your Name? TYPE HERE:'));
console.log('--------------');
console.log('--------------');
//calling username
console.log(chalk.cyanBright(`Welcome! ${username}, If you are a true cricket fan you are gonna love this quiz. Ipl is all about entertainment and i hope you will enjoy this quiz a lot.`));
console.log('--------------');
console.log('--------------');


//question list
let questionList = [
  {
    question: `When did IPL started?
   a: 2009
   b: 2005
   c: 2008`,
    answer: 'c'
  },

  {
    question: `Who won the inaugural session of IPL?
   a: MI
   b: RCB
   c: RR`,
    answer: 'c'
  },

  {
    question: `Which team won the most number of titles so far in IPL?
   a: MI
   b: KKR
   c: CSk`,
    answer: 'a'
  },

  {
    question: `Which player scored most runs in IPL so far?
   a: David Warner
   b: Virat Kohli
   c: Suresh Raina`,
    answer: 'b'
  },

  {
    question: `Who holds the record of highest individual score in IPL?
   a: Chris gayle
   b: Brendon Macculum
   c: ABD`,
    answer: 'a'
  },

  {
    question: `Which player holds the record of hitting 4 centuries in a single season?
   a: Chris gayle
   b: KL rahul
   c: Virat Kohli`,
    answer: 'c'
  },

  {
    question: `Which player had taken most wickets in ipl so far?
   a: Lasith malinga
   b: Jasprit Bumrah
   c: Amit Mishra`,
    answer: 'a'
  },

  {
    question: `Who won the emerging player award last year?
   a: Ruturaj Gaikwad
   b: Devdutt Padikkal
   c: Rishabh Pant`,
    answer: 'b'
  },

  {
    question: `Which player won the orange cap last season?
   a: Virat Kohli
   b: David Warner
   c: KL Rahul`,
    answer: 'c'
  },

  {
    question: `Which Australian has the best bowling figures in the IPL?
   a: Andrew Tye
   b: Adam Jampa
   c: James Faulkner`,
    answer: 'b'
  },

  {
    question: `Who was the captain of the Mumbai Indians in IPL 2012?
   a: Sachin Tedulkar
   b: Harbhajan Singh
   c: Rohit Sharma`,
    answer: 'b'
  },

  {
    question: `Which among these players has the joint-most ducks in IPL history alongside Harbhajan Singh?
   a: Parthiv Patel
   b: Jaheer Khan
   c: Rohit Sharma`,
    answer: 'a'
  },

  {
    question: `Which among these teams has never been involved in a tied game?
   a: Gujrat Lions
   b: Chennai Super Kings
   c: Rising Pune Supergiants`,
    answer: 'c'
  },

  {
    question: `Who won the 'Man of the Match' award in the IPL 2008 final?
   a: Marnus Labushagne
   b: Msd
   c: Yusuf Pathan`,
    answer: 'c'
  },

  {
    question: `Only one bowler has bowled two maiden overs in an IPL game. Who is he?
   a: Mohammad Siraj
   b: Jaydev Unadkat
   c: Shami`,
    answer: 'a'
  }
  
]


const highestScore = [
  {
    name: 'Prachi',
    score: '13'
  },
  {
    name: 'Manish',
    score: '15'
  },
]

function playGame (questionNumber, question, answer) {

  console.log(chalk.yellowBright(`${questionNumber}. ${question}`));
  let userAnswer = readLineSync.question('Write your answer here: ');

  if(userAnswer.toLowerCase() === answer) {
    console.log(chalk.green.bold('You are right'));
    score++;
  } else {
    console.log(chalk.bold.red('You are wrong!'));
  }
  console.log('--------------');
}

function getValue() {
  var questionNumber = 0;
  if (username) {
    for(let i = 0; i < questionList.length; i++) {
    questionNumber++;
    let myQuestion = questionList[i];
    playGame(questionNumber, myQuestion.question, myQuestion.answer);
    }

    if (score >= 10) {
      console.log(chalk.bgBlue('Wow! You truely a IPL fan.'))
    } else if (score <= 9 && score >= 5) {
      console.log(chalk.bgMagenta('Ah! You know about IPL, but little.'));
    } else {
      console.log(chalk.bgRedBright("Unfortunately! You don't seem like a true IPL fan."));
 }

  console.log('--');
  console.log(chalk.cyan.bold(`Your score is ${score}. Well Played!`));
  
  for (let j=0; j<highestScore.length; j++) {
    console.log(chalk.blue(`Highest scores are of ${highestScore[j].name} with score ${highestScore[j].score}. `));
  }
  
  } else {
    console.log(chalk.bold.bgRedBright('But, In Order To Play This Game You Have To enter Your Name!'))  
  }
  
}

getValue();
console.log('--------------');