import { When, Then } from "@cucumber/cucumber";
import { loginPage } from "../pages/index.js";
import { loginPageAssertions } from "../assertions/index.js";

When("the user logs in as {string}", async (userType) => {
  await loginPage.loginAs(userType);
});

Then("an {string} should be displayed", async (error) => {
  await loginPageAssertions.verifyLoginError(error);
});

Then("the login page should be displayed", async () => {
  await loginPageAssertions.verifyLoginPage();
});
