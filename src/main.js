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

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;
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
  render(filmListContainer, createFilmCardTemplate(), `beforeend`);
}

render(filmsList, createLoadMoreButtonTemplate(), `beforeend`);
render(filmsList, createPopupTemplate(), `beforeend`); // have to change render spot
render(films, createMostCommentedTemplate(), `beforeend`);
render(films, createTopRatedFilmsTemplate(), `beforeend`);

const filmListExtraTopRelated = siteMainElement.querySelector(`.films-list--top-related .films-list__container`);
const filmListMostCommented = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(filmListExtraTopRelated, createFilmCardTemplate(), `beforeend`);
  render(filmListMostCommented, createFilmCardTemplate(), `beforeend`);
}
render(siteFooterElement, createFooterStatistics(), `beforeend`);
