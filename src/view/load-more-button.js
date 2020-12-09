import Abstract from "./abstract";

const createLoadMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class Button extends Abstract {
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }
}
