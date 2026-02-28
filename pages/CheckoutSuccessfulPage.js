import { Label, BasePage } from "../framework/gui/index.js";

class CheckoutSuccessfulPage extends BasePage {
  selectors = {
    pageTitle: "[data-test='title']",
  };

  get pageTitle() {
    return new Label(this.selectors.pageTitle, "Page Title");
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }
}
export default new CheckoutSuccessfulPage();
