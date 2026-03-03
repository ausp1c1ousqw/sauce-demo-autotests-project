import { subscribeLoggerToProcessEvents } from "./framework/index.js";
import { loadEnv } from "./framework/index.js";

loadEnv(".env.local");

subscribeLoggerToProcessEvents();

export const config = {
  specs: ["./features/**/*.feature"],
  logLevel: "silent",
  maxInstances: 5,

  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 5,
      "goog:chromeOptions": {
        args: [
          "--headless=new",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--window-size=1920,1080",
        ],
      },
    },
  ],

  framework: "cucumber",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "artifacts/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        useCucumberStepReporter: true,
      },
    ],
  ],
  cucumberOpts: {
    require: ["./steps/*.js", "./features/support/**/*.js"],
    tagExpression: "not @skip",
  },
};
