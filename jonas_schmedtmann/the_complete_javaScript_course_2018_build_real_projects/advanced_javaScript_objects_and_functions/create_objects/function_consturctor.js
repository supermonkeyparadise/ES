/**
 * [ Function constructor ]
 * 
 * @param {*} name
 * @param {*} yearOfBirth
 * @param {*} job
 *
 * 補充：
 *     1. 第一個字大寫表示 class
 *     2. 每個物件都有一個 prototype property，它是一個 object
 *     3. john.__proto__ === Person.prototype  ===> true
 *     4. __proto__ 由系統建立 (new)
 *     5. prototype 可自由控制
 */
const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job;
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

const john = new Person('John', 1990, 'teacher');
const jane = new Person('Jane', 1969, 'designer');
const mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
