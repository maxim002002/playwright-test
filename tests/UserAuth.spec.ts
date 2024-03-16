//- [E2E-тест] Используя форму регистрации сделать флоу регистрации пользователя в приложении.
//  При успешном сабмите показывать не форму, а надпись “У вас есть доступ на сайт”
//  - Покрыть тестом пользовательский флоу регистрации.
// Ввод данных → сабмит → форма пропала и отображается надпись

import { test, expect } from "@playwright/test";
import { TEST_URL } from "./setTestUrl";

test.describe("Test Registration Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
    await page.getByTestId("buttonOpen-authModal").click();
  });

  test("test write wrong data", async ({ page }) => {
    await expect(page.getByTestId("auth-form")).toBeVisible();
    await page.getByTestId("inputMail-authModal").fill("test");
    await page.getByTestId("inputPassword-authModal").fill("test");
    const buttonLocator = await page.getByTestId("buttonSubmit-authModal");
    const isButtonDisabled = await buttonLocator.evaluate(
      (button: HTMLButtonElement) => button.disabled,
    );
    expect(isButtonDisabled).toBe(true);
    await expect(page).toHaveURL(TEST_URL);
  });

  test("test write right data", async ({ page }) => {
    await expect(page.getByTestId("auth-form")).toBeVisible();
    await page.getByTestId("inputMail-authModal").fill("admin@gmail.com");
    await page.getByTestId("inputPassword-authModal").fill("12345");
    page.getByTestId("buttonSubmit-authModal").click();
    await page.waitForSelector("text=У вас есть доступ на сайт", {
      timeout: 10000,
    });
    await expect(page.getByText("У вас есть доступ на сайт")).toBeVisible();
    await expect(page).toHaveURL(`${TEST_URL}` + "dashboard");
    await page.getByText("Выйти").click();
    await expect(page).toHaveURL(TEST_URL);
    await expect(page.getByTestId("buttonOpen-authModal")).toBeVisible();
  });
});
