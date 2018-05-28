import $ from 'jquery';

import { elements } from './base';
import { limitRecipeTitle } from './searchView';

export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
  $('.recipe__love')
    .find('use')
    .attr('href', `img/icons.svg#${iconString}`);
};

export const toogleLikeMenu = numLikes => {
  if (numLikes > 0) {
    elements.likesMenu.show();
  } else {
    elements.likesMenu.hide();
  }
};

export const renderLike = like => {
  const markup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">${like.author}</p>
            </div>
        </a>
    </li>
    `;

  elements.likesList.append(markup);
};

export const deleteLike = id => {
  const el = $('.likes__link')
    .filter(`a[href="#${id}"]`)
    .closest('li');
  if (el) el.remove();
};
