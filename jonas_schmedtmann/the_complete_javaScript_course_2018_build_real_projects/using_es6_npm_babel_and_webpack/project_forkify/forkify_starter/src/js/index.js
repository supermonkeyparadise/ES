import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 *
 * 我要讓 state 可以在 console.log 看到
 */
const state = {};
window.state = state;

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();
  console.log('## query:', query);

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for result
    searchView.clearInput();
    searchView.clearResults();

    // 4) Search for recipe
    // async function return Promise
    await state.search.getResult();

    // 5) render results on UI
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.on('submit', function(e) {
  e.preventDefault();
  controlSearch();
});
