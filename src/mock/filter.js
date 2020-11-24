export const getFilterNum = (filmCard) => {
  const counts = {
    all: filmCard.length,
    Watchlist: 0,
    History: 0,
    Favorites: 0
  };
  filmCard.forEach((card) => {
    counts.Watchlist = card.isInWatchList ? counts.Watchlist += 1 : counts.Watchlist;
    counts.History = card.isWatched ? counts.History += 1 : counts.History;
    counts.Favorites = card.isFavorite ? counts.Favorites += 1 : counts.Favorites;
  });
  const resultFilters = [];

  for (let [key, value] of Object.entries(counts)) {
    resultFilters.push({
      title: key,
      count: value
    });
  }

  return resultFilters;
};
