import {humanizeFilmCardDate} from "../utils";

export const createFilmCardTemplate = (film) => {
  const {title, poster, descriptions, genre, rating, isInWatchList, isWatched, isFavorite, year, duration} = film;
  const inWatchlistClass = isInWatchList ? `film-card__controls-item--active` : ``;
  const watchedClass = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteClass = isFavorite ? `film-card__controls-item--active` : ``;

  const relaseDateOfFilm = humanizeFilmCardDate(year);
  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${relaseDateOfFilm}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="./images/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${descriptions}</p>
          <a class="film-card__comments">5 comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${inWatchlistClass}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClass}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClass}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};
