
import Abstract from "./abstract";
const createFooterStatistics = (count) => {
  return `<section class="footer__statistics">
            <p>${count} movies inside</p>
          </section>`;
};
export default class Footer extends Abstract{
  constructor(count) {
    super();
    this._count = count;
  }

  getTemplate() {
    return createFooterStatistics(this._count);
  }
}
