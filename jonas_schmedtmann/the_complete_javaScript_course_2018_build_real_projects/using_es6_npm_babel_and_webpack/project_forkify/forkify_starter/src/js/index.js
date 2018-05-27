import $ from 'jquery';

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
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

    // Highlight selected search item
    searchView.highlightSelected(id);

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
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (err) {
      alert('Error processing recipe!');
    }
  }
};

// 當 url的 hash 變更 or 重新載入頁面時觸發
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

/**
 * LIST CONTROLLER
 */
const controlList = () => {
  // Create a new list IF there in none yet
  if (!state.list) state.list = new List();

  // Add each ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

elements.shopping.on('click', 'li', function(e) {
  const id = $(this).data('itemid');

  if (
    $(e.target)
      .parent()
      .hasClass('shopping__delete')
  ) {
    state.list.deleteItem(id);
    listView.deleteItem(id);
  } else if ($(e.target).hasClass('shopping__count-value')) {
    const val = parseFloat($(e.target).val());
    state.list.updateCount(id, val);
  }
});

/**
 * LIKE CONTROLLER
 */
const controlLike = () => {
  if (!state.likes) state.likes = new Likes();

  const currentID = state.recipe.id;

  if (!state.likes.isLiked(currentID)) {
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );

    console.log('## add state.likes', state.likes);
  } else {
    state.likes.deleteLike(currentID);
    console.log('## del state.likes', state.likes);
  }
};

// Handing recipe button clicks
elements.recipe.on('click', 'button', function() {
  if ($(this).hasClass('btn-decrease')) {
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if ($(this).hasClass('btn-increase')) {
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if ($(this).hasClass('recipe__btn--add')) {
    controlList();
  } else if ($(this).hasClass('recipe__love')) {
    controlLike();
  }
});
