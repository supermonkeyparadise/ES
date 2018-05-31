// default export(只能一個)
export default () => {
  console.log('## utilities.js');
};

// named export(多個)
export const add = (a, b) => {
  return a + b;
};

export const sub = (a, b) => {
  return a - b;
};

export const name = 'Steven Chou';
