import { checkoutSuccesfulPageAssertions } from "../assertions/index.js";
import { Then } from "@wdio/cucumber-framework";

Then("the checkout should be completed successfully", async () => {
  await checkoutSuccesfulPageAssertions.verifyCheckoutSuccessfulPage();
});
