// Multiple arguments
let add = (a, b, c) => {
  return a + b + c;
};

let result = add(10, 1, 3);
console.log(result);

// Default arguments
let getScoreText = (name = 'Anonymous', score = 0) => {
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Practice
let getTip = (total, tipPercent = 0.2) => {
  // let percent = tipPercent * 100;
  // let tip = total * tipPercent;
  return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`;
};

let tip = getTip(100);
console.log(tip);
