import $ from 'jquery';

import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoder, clearLoader } from './views/base';

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};
// FOR TESTING
window.state = state;

/**
 * SEARCH CONTROLLER
 */
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
    renderLoder(elements.searchRes);

    try {
      // 4) Search for recipe
      // async function return Promise
      await state.search.getResult();

      // 5) render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert('Something wrong with the search...');
      clearLoader();
    }
  }
};

elements.searchForm.on('submit', e => {
  e.preventDefault();
  controlSearch();
});

// CAN NOT USE ARROW FUNCTION
elements.searchResPages.on('click', 'button', function(e) {
  const goToPage = parseInt($(this).data('goto'), 10);
  searchView.clearResults();
  searchView.renderResults(state.search.result, goToPage);
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
  // Get ID from url
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();
    renderLoder(elements.recipe);

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      clearLoader()
      recipeView.renderRecipe(state.recipe)
    } catch (err) {
      alert('Error processing recipe!');
    }
  }
};

// 當 url的 hash 變更 or 重新載入頁面時觸發
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipe)
);
