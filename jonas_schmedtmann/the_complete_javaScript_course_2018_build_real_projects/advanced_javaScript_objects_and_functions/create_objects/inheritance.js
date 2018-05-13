function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHi = function() {
  return `Hello ${this.firstName} ${this.lastName}`;
};

function Student(firstName, lastName) {
  Person.apply(this, arguments);
}

// Student.prototype = Person.prototype;
Student.prototype = Object.create(Person.prototype);
Student.prototype.status = function() {
  return 'I am currently a student!';
};

var elie = new Student('Elie', 'Schoppik');
console.log(elie.sayHi());

// gg 了
var steven = new Person('Steven', 'Chou');
console.log(steven.status());
