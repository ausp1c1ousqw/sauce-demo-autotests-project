import { Then } from "@cucumber/cucumber";
import { cartPageAssertions } from "../assertions/index.js";
import { cartPage } from "../pages/index.js";

Then(/^the cart should contain (\d+) products?$/, async (number) => {
  await cartPage.open();
  await cartPageAssertions.verifyNumberOfProductsInCart(number);
});
