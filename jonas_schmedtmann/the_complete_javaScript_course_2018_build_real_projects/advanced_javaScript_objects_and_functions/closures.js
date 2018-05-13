/**
 * [ Sample 1 ]
 *
 * @param {*} retirementAge
 *
 * 1. 因為執行完 retirement()，它的 scope 還在 memory
 * 2. inner function hold 住外部的變數 [retirementAge, a]
 */
function retirement(retirementAge) {
  const a = ' years left until retirement.';
  return function(yearOfBirth) {
    const age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

retirement(66)(1990);
const retirementGermary = retirement(65);
retirementGermary(1990);

/**
 * [ Sample 2 ]
 * 
 * @param {*} job 
 */
function interviewQuestion(job) {
  return function(name) {
    if (job === 'desinger') {
      console.log(`${name}, can you please explain what UX design is?`);
    } else if (job === 'teacher') {
      console.log(`What subject do you teach? ${name} ?`);
    } else {
      console.log(`Hello ${name}, what do you do?`);
    }
  };
}

interviewQuestion('teacher')('John');
