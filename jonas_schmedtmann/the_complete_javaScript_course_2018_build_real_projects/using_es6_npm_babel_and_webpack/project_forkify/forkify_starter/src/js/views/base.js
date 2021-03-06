import $ from 'jquery';

export const elements = {
  searchForm: $('.search'),
  searchInput: $('.search__field'),
  searchResList: $('.results__list'),
  searchRes: $('.results'),
  searchResPages: $('.results__pages'),
  recipe: $('.recipe'),
  shopping: $('.shopping__list'),
  likesMenu: $('.likes__field'),
  likesList: $('.likes__list')
};

// 方便修改 class name
export const elementStrings = {
  loader: 'loader'
};

export const renderLoder = parent => {
  const loader = `
    <div class="${elementStrings.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;

  parent.prepend(loader);
};

export const clearLoader = () => {
  const loader = $(`.${elementStrings.loader}`);
  if (loader) loader.remove();
};
