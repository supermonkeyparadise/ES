// 1. Undefined for variable

let name;
name = 'Jen';

if (name === undefined) {
  console.log('Please provide a name');
} else {
  console.log(name);
}

// 2. Undefined for function arguments
let square = num => {
  console.log(num);
};

// 3. ** Undefined as function return default value **
let result = square();
console.log(result);

// 4. undefined 為系統 default value
// null 為開發人員自行設定
let age = 27;
age = null;
console.log(age);
