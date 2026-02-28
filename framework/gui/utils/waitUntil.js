import { logger } from "../../logger/index.js";

const mediumTimeout = parseInt(process.env.IMEOUT_MEDIUM) || 2000;

export async function waitUntil(conditionFn, description = "condition", timeout = mediumTimeout) {
  logger.info(`Waiting until ${description}`);
  await browser.waitUntil(async () => await conditionFn(), { timeout });
}
