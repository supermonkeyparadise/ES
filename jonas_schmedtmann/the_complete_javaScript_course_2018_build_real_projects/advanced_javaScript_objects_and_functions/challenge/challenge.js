/**
 * create the new scope[ Data Privacy ]
 */
(function() {
  function Question(question, answers, corrent) {
    this.question = question;
    this.answers = answers;
    this.corrent = corrent;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    this.answers.forEach((el, index) => {
      console.log(`${index}: ${el}`);
    });
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.corrent) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again :)');
    }
  };

  const q1 = new Question(
    'Is JavaScript the coolest programming language in the world?',
    ['yes', 'no'],
    0
  );

  const q2 = new Question(
    "What is name of the course's teacher?",
    ['John', 'Michael', 'Jonas'],
    2
  );

  const q3 = new Question(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2
  );

  const questions = [q1, q2, q3];
  const r = Math.floor(Math.random() * questions.length);
  questions[r].displayQuestion();

  const answer = parseInt(prompt('Please select the corrent answer.'));
  questions[r].checkAnswer(answer);
})();
