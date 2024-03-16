//ts-ignore
import { test, expect } from "@playwright/test";
import { TEST_URL } from "./setTestUrl";
import Tooltip from "./helpers/tooltip";

const tooltip = new Tooltip();

test.describe("modal", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
    await page.getByTestId("buttonOpen-authModal").click();
    const modalBackgroundElement = await page.waitForSelector(
      "[data-testid='modal-background']",
      { timeout: 2000 },
    );
    expect(modalBackgroundElement).not.toBeNull();
  });

  test("opens and closes by external click", async ({ page }) => {
    await page.mouse.click(10, 10);
    await tooltip.closeModal(page);
  });

  test("closes by clicking on Close Button", async ({ page }) => {
    await page.getByTestId("buttonClose-authModal").click();
    await tooltip.closeModal(page);
  });

  test("closes by pressing Escape key", async ({ page }) => {
    await page.keyboard.press("Escape");
    await tooltip.closeModal(page);
  });
});
