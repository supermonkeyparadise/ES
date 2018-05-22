import str from './models/Search';

// import { add as a, multiple, ID } from './views/searchView';

import * as searchView from './views/searchView';
import gg from './views/searchView';

// console.log(
//   `Using imported functions! ${a(ID, 8)} and ${multiple(3, 5)}. ${str}`
// );

console.log(
  `Using imported functions! ${searchView.add(
    searchView.ID,
    8
  )} and ${searchView.multiple(3, 4)}. ${str}`
);

console.log(`gg => ${gg}`);
