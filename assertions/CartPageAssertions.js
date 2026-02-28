import { assertWithLogging } from "../framework/index.js";
import { cartPage } from "../pages/index.js";

class CartPageAssertions {
  async verifyNumberOfProductsInCart(expected) {
    const actual = await cartPage.getProductsQuantity();
    assertWithLogging(actual, expected, "Verify Number Of Products");
  }
}
export default new CartPageAssertions();
