const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

describe("Selenium home page", () => {
  it("Should open homepage", async () => {
    await driver.get("http://localhost:3000/");
    let elements = await driver.findElement(By.css("div"));
    expect(elements).not.toBeUndefined();
    driver.quit();
  });
});
