import { expect } from "@playwright/test";

//ts-ignore
export default class ToolTip {
  async clickAndBlur(elementid, page) {
    const element = await page.getByTestId(elementid);
    await element.click();
    await element.blur();
  }
  async closeModal(page) {
    await page.waitForTimeout(100); // Дождаться закрытия модального окна
    await page.waitForSelector("#modal", { state: "hidden" }); // Дождаться, пока модальное окно исчезнет или станет невидимым
    const modalBackgroundElement2 = await page.$("#modal-background");
    expect(modalBackgroundElement2).toBeNull();
  }
}
