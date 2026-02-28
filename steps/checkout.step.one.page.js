import { Given, When, Then } from "@cucumber/cucumber";
import { checkoutStepOnePageAssertions } from "../assertions/index.js";
import { checkoutStepOnePage } from "../pages/index.js";

Given("the user is on the checkout page", async () => {
  await checkoutStepOnePage.open();
});

When("the user submit checkout form with {string} personal information", async (infoType) => {
  await checkoutStepOnePage.submitCheckoutForm(infoType);
});

Then("an {string} should be displayed on CheckoutPage", async (errorType) => {
  await checkoutStepOnePageAssertions.verifyCheckoutError(errorType);
});
