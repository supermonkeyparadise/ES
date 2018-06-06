// const sum = require('./sum');
// import sum from './sum';
// import './image_viewer'; // No import anything, ** Just run it **!!

// const total = sum(1, 2);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // return promise
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
