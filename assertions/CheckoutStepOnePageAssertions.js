import { assertWithLogging } from "../framework/index.js";
import { checkoutStepOnePage } from "../pages/index.js";
import { errors } from "../fixtures/index.js";

class CheckoutStepOnePageAssertions {
  async verifyCheckoutError(errorType) {
    const actual = await checkoutStepOnePage.getCheckoutErrorText();
    const expected = errors[errorType];
    assertWithLogging(actual, expected, "Verify Checkout Error");
  }
}
export default new CheckoutStepOnePageAssertions();
