import { assertWithLogging } from "../framework/index.js";
import { productPage } from "../pages/index.js";
import { titles } from "../fixtures/index.js";

class ProductPageAssertions {
  async verifyProductPage() {
    const actual = await productPage.getPageTitleText();
    const expected = titles.productPage;
    assertWithLogging(actual, expected, "Verify Product Page Opened");
  }
}
export default new ProductPageAssertions();
