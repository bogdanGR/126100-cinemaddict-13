import {createElement} from "../utils";

const createMenuTemplate = ({title, count}) =>`<a href="#${title}" class="main-navigation__item">${title} <span class="main-navigation__item-count">${count}</span></a>`;

const getFilters = (filters) => {
  return `<nav class="main-navigation">
     <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${filters.map((filter) => createMenuTemplate(filter)).join(``)}
            <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `;
};
export default class MainNavigationView {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return getFilters(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
