import {getFilters} from "./view/site-menu";
import {createFilmCardTemplate} from "./view/film-card";
import {createLoadMoreButtonTemplate} from "./view/load-more-button";
import {createPopupTemplate} from "./view/popup";
import {createSortFilter} from "./view/sort-filter";
import {createUserRankTemplate} from "./view/user-rank";
import {createFilmsTemplate} from "./view/films";
import {createMostCommentedTemplate} from "./view/most-commented-films";
import {createTopRatedFilmsTemplate} from "./view/top-rated-films";
import {createFooterStatistics} from "./view/footer-statistics";
import {getFilmCard} from "./mock/film";
import {getFilterNum} from "./mock/filter";

const FILM_CARDS_COUNT = 25;
const MAX_RENDER_CARDS = 5;
const EXTRA_FILMS_COUNT = 2;

const films = new Array(FILM_CARDS_COUNT).fill().map(getFilmCard);
const filters = getFilterNum(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);

render(siteHeaderElement, createUserRankTemplate(), `beforeend`);

render(siteMainElement, getFilters(filters), `beforeend`);



render(siteMainElement, createSortFilter(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);
const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
const filmsList = siteMainElement.querySelector(`.films-list`);
const filmsNode = siteMainElement.querySelector(`.films`);

for (let i = 0; i < MAX_RENDER_CARDS; i++) {
  render(filmListContainer, createFilmCardTemplate(films[i]), `beforeend`);
}

if (films.length > MAX_RENDER_CARDS) {
  let renderedFilmCount = MAX_RENDER_CARDS;

  render(filmsList, createLoadMoreButtonTemplate(), `beforeend`);

  const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + MAX_RENDER_CARDS)
      .forEach((film) => render(filmListContainer, createFilmCardTemplate(film), `beforeend`));

    renderedFilmCount += MAX_RENDER_CARDS;

    if (renderedFilmCount >= films.length) {
      loadMoreButton.remove();
    }
  });
}
//render(filmsList, createPopupTemplate(films), `beforeend`); // have to change render spot
render(filmsNode, createMostCommentedTemplate(), `beforeend`);
render(filmsNode, createTopRatedFilmsTemplate(), `beforeend`);

const filmListExtraTopRelated = siteMainElement.querySelector(`.films-list--top-related .films-list__container`);
const filmListMostCommented = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(filmListExtraTopRelated, createFilmCardTemplate(films[i]), `beforeend`);
  render(filmListMostCommented, createFilmCardTemplate(films[i]), `beforeend`);
}
render(siteFooterElement, createFooterStatistics(FILM_CARDS_COUNT), `beforeend`);
