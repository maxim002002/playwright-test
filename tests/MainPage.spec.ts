// - [Integration-тест] Сделать компонент формы входа
//     + Покрыть тестами функции валидации
//     + Покрыть тестами валидацию инпутов
//     + Покрыть тестами сабмит формы
//     - Сделать скриншот тест нескольких состояний

import { test, expect } from "@playwright/test";
import Tooltip from "./helpers/tooltip";
import { TEST_URL } from "./setTestUrl";

const tooltip = new Tooltip();

test.describe("Test MainPage Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
    await page.getByTestId("buttonOpen-authModal").click();
  });

  test("entering a value", async ({ page }) => {
    await page.getByTestId("inputMail-authModal").fill("123");
    await page.getByTestId("inputPassword-authModal").fill("456");
    await expect(page.getByTestId("inputMail-authModal")).toHaveValue("123");
    await expect(page.getByTestId("inputPassword-authModal")).toHaveValue(
      "456",
    );
  });

  test("validation bad email input", async ({ page }) => {
    const input = await page.getByTestId("inputMail-authModal");
    await tooltip.clickAndBlur("inputMail-authModal", page);
    await expect(page.getByText("Обязательно к заполнению")).toBeVisible();
    await input.fill("wrong.mail");
    await expect(page.getByText("Некорректный email адрес")).toBeVisible();
    await input.fill("admin@gmail.com");
    await expect(page.getByText("Электронная почта")).toBeVisible();
  });

  test("validation bad password input", async ({ page }) => {
    const input = await page.getByTestId("inputPassword-authModal");
    await tooltip.clickAndBlur("inputPassword-authModal", page);
    await expect(page.getByText("Обязательно к заполнению")).toBeVisible();
    await input.fill("123");
    await expect(page.getByText("Слишком короткий пароль")).toBeVisible();
    await input.fill("12345");
    await expect(page.getByText("Введите пароль")).toBeVisible();
  });

  test("the button may be blocked if the email is incorrect", async ({
    page,
  }) => {
    await page.getByTestId("inputMail-authModal").fill("admingmail.com");
    await page.getByTestId("inputPassword-authModal").fill("12345");

    const buttonLocator = await page.getByTestId("buttonSubmit-authModal");
    const isButtonDisabled = await buttonLocator.evaluate(
      (button: HTMLButtonElement) => button.disabled,
    );
    expect(isButtonDisabled).toBe(true);

    await page.getByTestId("inputMail-authModal").fill("admin@gmail.com");
    const isButtonActive = await buttonLocator.evaluate(
      (button: HTMLButtonElement) => button.disabled,
    );
    expect(isButtonActive).toBe(false);
  });

  test("the button may be blocked if the password is incorrect", async ({
    page,
  }) => {
    await page.getByTestId("inputMail-authModal").fill("admin@gmail.com");
    await page.getByTestId("inputPassword-authModal").fill("123");

    const buttonLocator = await page.getByTestId("buttonSubmit-authModal");
    const isButtonDisabled = await buttonLocator.evaluate(
      (button: HTMLButtonElement) => button.disabled,
    );
    expect(isButtonDisabled).toBe(true);

    await page.getByTestId("inputPassword-authModal").fill("12345");
    const isButtonActive = await buttonLocator.evaluate(
      (button: HTMLButtonElement) => !button.disabled,
    );
    expect(isButtonActive).toBe(true);
  });
});
