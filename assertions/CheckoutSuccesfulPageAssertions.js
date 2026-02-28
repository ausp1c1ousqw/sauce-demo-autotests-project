import { assertWithLogging } from "../framework/index.js";
import { checkoutSuccessfulPage } from "../pages/index.js";
import { titles } from "../fixtures/index.js";

class CheckoutSuccessfulPageAssertions {
  async verifyCheckoutSuccessfulPage() {
    const actual = await checkoutSuccessfulPage.getPageTitleText();
    const expected = titles.checkoutSuccessfulPage;
    assertWithLogging(actual, expected, "Verify Checkout Successful Page Opened");
  }
}
export default new CheckoutSuccessfulPageAssertions();
