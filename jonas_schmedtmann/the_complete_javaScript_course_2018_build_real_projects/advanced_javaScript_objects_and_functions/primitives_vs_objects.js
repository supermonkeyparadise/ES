// primitives
var a = 1;
var b = a;
b = 2;
console.log('##primitives:', a);
console.log('##primitives:', b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log('##Objects: ', obj1.age);
console.log('##Objects: ', obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
console.log('##Functions: ', age);
console.log('##Functions: ', obj.city);
