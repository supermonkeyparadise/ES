import { elements } from './base';

export const getInput = () => elements.searchInput.val();

export const clearInput = () => {
  elements.searchInput.val('');
};

export const clearResults = () => {
  elements.searchResList.empty();
};

const renderRecipe = recipe => {
  return `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
};

export const renderResults = recipes => {
  elements.searchResList.append(recipes.map(renderRecipe));
};
