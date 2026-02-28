import { subscribeLoggerToProcessEvents } from "./framework/index.js";
import { loadEnv } from "./framework/index.js";

loadEnv(".env.local");

subscribeLoggerToProcessEvents();

export const config = {
  specs: ["./features/**/*.feature"],
  logLevel: "silent",
  maxInstances: 1,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--user-data-dir=C:\\chrome-wdio-profile"],
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
