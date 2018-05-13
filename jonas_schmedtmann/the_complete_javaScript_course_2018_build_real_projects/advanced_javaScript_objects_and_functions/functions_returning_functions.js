function interviewQuestion(job) {
  if (job === 'desinger') {
    return function(name) {
      console.log(`${name}, can you please explain what UX design is?`);
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log(`What subject do you teach? ${name} ?`);
    };
  } else {
    return function(name) {
      console.log(`Hello ${name}, what do you do?`);
    };
  }
}

const teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

const designerQuestion = interviewQuestion('desinger');
designerQuestion('John');

/**
 *  key point
 */
interviewQuestion('teacher')('Steven');
