const john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        `Good ${timeOfDay}, Ladies and gentlment! I'm ${this.name}, I'm a ${
          this.job
        } and I'm ${this.age} years old.`
      );
    } else if (style === 'friendly') {
      console.log(
        `Hey! What'up? I'm ${this.name}, I'm a ${this.job} and I'm ${
          this.age
        } years old. Have a nice ${timeOfDay}.`
      );
    }
  }
};

const emily = {
  name: 'Emily',
  age: 35,
  job: 'desinger'
};

john.presentation('formal', 'morning');

/**
 *  [ call ]
 *  1. 即刻執行
 */
john.presentation.call(emily, 'friendly', 'afternoon');

/**
 *  [ bind ]
 *  1. 不會執行
 *  2. ⭐ preset some arguments
 */
// **  **
const johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');

const emilyFriendly = john.presentation.bind(emily, 'formal');
emilyFriendly('afternoon');
