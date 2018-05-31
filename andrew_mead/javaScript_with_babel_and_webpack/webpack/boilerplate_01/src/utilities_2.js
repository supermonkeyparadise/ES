const something = () => {
  console.log('## utilities_2.js');
};

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const name = 'Jean Lin';

export { add, sub, name, something as default };
