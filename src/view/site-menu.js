import Abstract from "./abstract";

const createMenuTemplate = ({title, count}) =>`<a href="#${title}" class="main-navigation__item">${title} <span class="main-navigation__item-count">${count}</span></a>`;

const getFilters = (filters) => {
  return `<nav class="main-navigation">
     <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${filters.map((filter) => createMenuTemplate(filter)).join(``)}
            <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `;
};
export default class MainNavigationView extends Abstract{
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return getFilters(this._filters);
  }
}
