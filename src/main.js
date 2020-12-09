import Popup from "./view/popup";
import SortFilter from "./view/sort-filter";
import UserRankView from "./view/user-rank";
import Films from "./view/films";
import TopRated from "./view/top-rated-films";
import MostCommented from "./view/most-commented-films";
import MainNavigationView from "./view/site-menu";
import FilmCard from "./view/film-card";
import Button from "./view/load-more-button";
import Footer from "./view/footer-statistics";
import NoFilm from "./view/no-films";
import {getFilmCard} from "./mock/film";
import {getFilterNum} from "./mock/filter";
import {render, RenderPosition} from "./utils/render.js";
import {isDeactivateEvent} from "./utils/common";
import {Comment} from "./view/comment";
import {generateComments} from "./mock/comment";

const FILM_CARDS_COUNT = 25;
const MAX_RENDER_CARDS = 5;
const EXTRA_FILMS_COUNT = 2;

const films = new Array(FILM_CARDS_COUNT).fill().map(getFilmCard);
const filters = getFilterNum(films);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);

const renderCards = (container, cardsTpl) => {
  const card = new FilmCard(cardsTpl);
  const cardDetails = new Popup(cardsTpl);
  const cardComments = new Comment(generateComments());

  const closeByEscHandler = (evt) => {
    if (isDeactivateEvent(evt)) {
      container.replaceChild(card.getElement(), cardDetails.getElement());
      document.removeEventListener(`keydown`, closeByEscHandler);
    }
  };
  const openNodeHandler = () => {
    container.replaceChild(cardDetails.getElement(), card.getElement());
    document.addEventListener(`keydown`, closeByEscHandler);
  };
  const closeNodeHandler = () => {
    container.replaceChild(card.getElement(), cardDetails.getElement());
  };
  card.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, openNodeHandler);
  card.getElement().querySelector(`.film-card__title`).addEventListener(`click`, openNodeHandler);
  card.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, openNodeHandler);
  cardDetails.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, closeByEscHandler);
    });
  cardDetails.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, closeByEscHandler);
    });
  cardDetails.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, closeNodeHandler);
  if (FILM_CARDS_COUNT) {
    render(container, card.getElement(), RenderPosition.BEFOREEND);
  }
};

render(siteHeaderElement, new UserRankView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new MainNavigationView(filters).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SortFilter().getElement(), RenderPosition.BEFOREEND);

render(siteMainElement, new Films().getElement(), RenderPosition.BEFOREEND);
const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
const filmsList = siteMainElement.querySelector(`.films-list`);
const filmsNode = siteMainElement.querySelector(`.films`);

if (FILM_CARDS_COUNT) {
  films
    .slice(0, Math.min(films.length, MAX_RENDER_CARDS))
    .forEach((cardTpl) => renderCards(filmListContainer, cardTpl));


  if (films.length > MAX_RENDER_CARDS) {
    let renderedFilmCount = MAX_RENDER_CARDS;

    render(filmsList, new Button().getElement(), RenderPosition.BEFOREEND);

    const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

    loadMoreButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      films
        .slice(renderedFilmCount, renderedFilmCount + MAX_RENDER_CARDS)
        .forEach((cardTpl) => renderCards(filmListContainer, cardTpl));
      renderedFilmCount += MAX_RENDER_CARDS;

      if (renderedFilmCount >= films.length) {
        loadMoreButton.remove();
      }
    });
  }
  render(filmsNode, new TopRated().getElement(), RenderPosition.BEFOREEND);
  render(filmsNode, new MostCommented().getElement(), RenderPosition.BEFOREEND);

  const filmListExtraTopRelated = siteMainElement.querySelector(`.films-list--top-related .films-list__container`);
  const filmListMostCommented = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);

  for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
    render(filmListExtraTopRelated, new FilmCard(films[i]).getElement(), RenderPosition.BEFOREEND);
    render(filmListMostCommented, new FilmCard(films[i]).getElement(), RenderPosition.BEFOREEND);
  }
} else {
  render(filmListContainer, new NoFilm().getElement(), RenderPosition.BEFOREEND);
}

render(siteFooterElement, new Footer(FILM_CARDS_COUNT).getElement(), RenderPosition.BEFOREEND);
