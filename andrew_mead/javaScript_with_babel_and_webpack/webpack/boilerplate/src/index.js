import utilities, { add, sub, name } from './utilities';
import * as sc from './scream';

console.log('## index.js');

utilities();
console.log(add(1, 2));
console.log(sub(3, 2));
console.log(name);

console.log(sc.scream('Woooo...!!'));
