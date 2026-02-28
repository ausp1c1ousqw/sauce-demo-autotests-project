import { When, Then } from "@cucumber/cucumber";
import { headerAssertions } from "../assertions/index.js";
import { header } from "../components/index.js";

Then("the cart badge should display {string}", async (number) => {
  await header.waitUntilBadgeCountEquals(number);
  await headerAssertions.verifyCartBadgeCount(number);
});

Then("the cart badge should not be displayed", async () => {
  await headerAssertions.verifyCartBadgeNotDisplayed();
});

When("the user logs out", async () => {
  await header.logout();
});
