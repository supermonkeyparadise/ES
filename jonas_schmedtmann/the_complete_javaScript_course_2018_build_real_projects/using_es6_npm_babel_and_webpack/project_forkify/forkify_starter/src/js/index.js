import Search from './models/Search';
import $ from 'jquery';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = 'pizza';

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for result

    // 4) Search for recipe
    // async function return Promise
    await state.search.getResult();

    // 5) render results on UI
    console.log(state.search.result);
  }
};

$('.search').on('submit', function(e) {
  e.preventDefault();
  controlSearch();
});
