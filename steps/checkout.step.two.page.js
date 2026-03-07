import { When } from "@cucumber/cucumber";
import { checkoutStepTwoPage } from "../pages";

When("finish checkout", async () => {
  await checkoutStepTwoPage.clickFinishButton();
});
