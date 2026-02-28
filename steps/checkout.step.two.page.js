import { When } from "@cucumber/cucumber";
import { checkoutStepTwoPage } from "../pages/index.js";

When("finish checkout", async () => {
  await checkoutStepTwoPage.clickFinishButton();
});
