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
    question: 'Q1: When did IPL started?',
    options: ['2009', '2005','2008'],
    answers: 3
  },

  {
    question:'Q2: Who won the inaugural session of IPL?',
    options: ['MI', 'RCB', 'RR'],
    answers: 3
  },

  {
    question: 'Q3: Which team won the most number of titles so far in IPL?',
    options: ['MI', 'KKR', 'CSk'],
    answers: 1
  },

  {
    question: 'Q4: Which player scored most runs in IPL so far?',
    options: ['David Warner', 'Virat Kohli', 'Suresh Raina'],
    answers: 2
  },

  {
    question: 'Q5: Who holds the record of highest individual score Q1:in IPL?',
    options: ['Chris gayle', 'Brendon Macculum', 'ABD'],
    answers: 1
  },

  {
    question: 'Q6: Which player holds the record of hitting 4 centuries in a single season?',
    options: ['Chris gayle', 'KL rahul', 'Virat Kohli'],
    answers: 3
  },

  {
    question: 'Q7: Which player had taken most wickets in ipl so far?',
    options: ['Lasith malinga', 'Jasprit Bumrah', 'Amit Mishra'],
    answers: 3
  },

  {
    question: 'Q8: Who won the emerging player award in 2020?',
    options: ['Ruturaj Gaikwad', 'Devdutt Padikkal', 'Rishabh Pant'],
    answers: 2
  },

  {
    question: 'Q9: Which player won the orange cap in 2020?',
    options: ['Virat Kohli', 'David Warner', 'KL Rahul'],
    answers: 3 
  },

  {
    question: 'Q10: Which Australian has the best bowling figures in the IPL?',
    options: ['Andrew Tye', 'Adam Jampa', 'James Faulkner'],
    answers: 2
  },

  {
    question: 'Q11: Who was the captain of the Mumbai Indians in IPL 2012?',
    options: ['Sachin Tedulkar', 'Harbhajan Singh', 'Rohit Sharma'],
    answers: 2
  },

  {
    question: 'Q12: Which among these players has the joint-most ducks in IPL history alongside Harbhajan Singh?',
    options: ['Parthiv Patel', 'Jaheer Khan', 'Rohit Sharma'],
    answers: 1
  },

  {
    question: 'Q13: Which among these teams has never been involved in a tied game?',
    options: ['Gujrat Lions', 'Chennai Super Kings', 'Rising Pune Supergiant'],
    answers: 3
  },

  {
    question: 'Q14: Who won the \'Man of the Match\' award in the IPL 2008 final?',
    options: ['Marnus Labushagne', 'Msd', 'Yusuf Pathan'],
    answers: 3
  },

  {
    question: 'Q15: Only one bowler has bowled two maiden overs in an IPL game. Who is he?',
    options: ['Mohammad Siraj', 'Jaydev Unadkat', 'Shami'],
    answers: 1
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

function playGame (option, question, answer) {
  
  let userAnswer = readLineSync.keyInSelect(option,question);

  if(userAnswer + 1 == answer) {
    console.log(chalk.green.bold('You are right'));
    score++;
  } else {
    console.log(chalk.bold.red('You are wrong!'));
  }
  console.log('--------------');
}

function getValue() {
  
  if (username) {
    for(let i = 0; i < questionList.length; i++) {
    let myQuestion = questionList[i];
    playGame(myQuestion.options, myQuestion.question, myQuestion.answers);
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
  
  for (let j=0; j < highestScore.length; j++) {
    console.log(chalk.blue(`Highest scores are of ${highestScore[j].name} with score ${highestScore[j].score}. `));
  }
  
  } else {
    console.log(chalk.bold.bgRedBright('But, In Order To Play This Game You Have To enter Your Name!'))  
  }
  
}

getValue();
console.log('--------------');