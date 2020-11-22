import {createSiteMenuTemplate} from "./view/site-menu";
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

const FILM_CARDS_COUNT = 15;
const EXTRA_FILMS_COUNT = 2;

const dynamicFilms = new Array(FILM_CARDS_COUNT).fill().map(getFilmCard);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);

render(siteHeaderElement, createUserRankTemplate(), `beforeend`);
render(siteMainElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSortFilter(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);
const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
const filmsList = siteMainElement.querySelector(`.films-list`);
const films = siteMainElement.querySelector(`.films`);

for (let i = 0; i < FILM_CARDS_COUNT; i++) {
  render(filmListContainer, createFilmCardTemplate(dynamicFilms[i]), `beforeend`);
}
render(filmsList, createLoadMoreButtonTemplate(), `beforeend`);
render(filmsList, createPopupTemplate(dynamicFilms), `beforeend`); // have to change render spot
render(films, createMostCommentedTemplate(), `beforeend`);
render(films, createTopRatedFilmsTemplate(), `beforeend`);

const filmListExtraTopRelated = siteMainElement.querySelector(`.films-list--top-related .films-list__container`);
const filmListMostCommented = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(filmListExtraTopRelated, createFilmCardTemplate(dynamicFilms[i]), `beforeend`);
  render(filmListMostCommented, createFilmCardTemplate(dynamicFilms[i]), `beforeend`);
}
render(siteFooterElement, createFooterStatistics(FILM_CARDS_COUNT), `beforeend`);
