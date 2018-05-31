import utilities, { add, sub, name } from './utilities_1';
import utilities2, * as util2 from './utilities_2';
import * as sc from './scream';

console.log('## index.js??!!');

// use utilities_1 Module
utilities();
console.log(add(1, 2));
console.log(sub(3, 2));
console.log(name);

// use utilities_2 Module
utilities2();
console.log(util2.add(5, 5));
console.log(util2.sub(3, 3));
console.log(util2.name);

// use scream Module
console.log(sc.scream('Woooo...!!'));
