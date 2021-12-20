const { Builder, until } = require("selenium-webdriver");
const {
  findByDataTestSelenium,
  findByComponentSelenium,
} = require("../../utils/testUtils");

const driver = new Builder().forBrowser("chrome").build();

//TODO: test with user admin cookie,
//TODO: test for all categories
//TODO: test for certain category
//TODO: test for certain search parameter
//TODO: test for redirect to a product page
describe("Selenium Main page", () => {
  const nonAdminUsername = "davy000";
  const nonAdminPassword = "treasure";
  const adminUsername = "jb";
  const adminPassword = "secret";
  //let cookie;

  beforeAll(async () => {
    await driver.get("http://localhost:3000");
  });

  afterAll(async () => {
    await driver.manage().deleteAllCookies();
  });
  afterAll(async () => {
    await driver.quit();
  });

  //   It will create a user cookie for futher updating its details
  // it("Should redirect to user", async () => {
  //   //await driver.get("http://localhost:3000/registration");
  //   const button = (await findByDataTestSelenium("button", driver))[0]; //  Log me in
  //   const firstNameField = (await findByDataTestSelenium("input", driver))[0];
  //   const lastNameField = (await findByDataTestSelenium("input", driver))[1];
  //   const emailField = (await findByDataTestSelenium("input", driver))[2];
  //   const usernameField = (await findByDataTestSelenium("input", driver))[3];
  //   const passwordField = (await findByDataTestSelenium("input", driver))[4];

  //   await firstNameField.sendKeys(firstName);
  //   await lastNameField.sendKeys(lastName);
  //   await emailField.sendKeys(email);
  //   await usernameField.sendKeys(username);
  //   await passwordField.sendKeys(password);

  //   const actions = driver.actions({ async: true });
  //   await actions.move({ origin: button }).press().release().perform();

  //   await driver.wait(until.urlIs("http://localhost:3000/user"), 3000);
  //   const url = await driver.getCurrentUrl();
  //   expect(url).toBe(`http://localhost:3000/user`);
  //   cookie = await driver.manage().getCookies()[0];
  // });

  it("Should open main page", async () => {
    //Page title
    const title = await driver.getTitle();
    expect(title).toBe("Main page");

    // Nav bar conten
    const svgs = await findByComponentSelenium("svg", driver); // Navigation icons
    expect(svgs.length).toBe(3);
    const logo = await findByDataTestSelenium("logo", driver);
    expect(logo.length).toBe(1);

    // Main page content
    const header = await findByDataTestSelenium("header", driver);
    expect(header.length).toBe(1);
  });

  it("Should redirect to login page, when no user cookies provided", async () => {
    const navigation = await findByDataTestSelenium("navigation", driver);
    expect(navigation.length).toBe(1);
    const link = (await findByComponentSelenium("a", navigation[0]))[2]; //  user link

    let actions = driver.actions({ async: true });
    await actions.move({ origin: link }).press().release().perform();

    await driver.wait(until.urlIs("http://localhost:3000/login"), 3000);
    const url = await driver.getCurrentUrl();
    expect(url).toBe(`http://localhost:3000/login`);
  });

  //   It will create a user cookie for futher updating its details
  it("Should log in", async () => {
    const button = (await findByDataTestSelenium("button", driver))[0]; //  Log me in
    const usernameField = (await findByDataTestSelenium("input", driver))[0];
    const passwordField = (await findByDataTestSelenium("input", driver))[1];

    await usernameField.sendKeys(nonAdminUsername);
    await passwordField.sendKeys(nonAdminPassword);

    const actions = driver.actions({ async: true });
    await actions.move({ origin: button }).press().release().perform();

    await driver.wait(until.urlIs("http://localhost:3000/user"), 3000);
    const url = await driver.getCurrentUrl();
    expect(url).toBe(`http://localhost:3000/user`);

    //cookie = await driver.manage().getCookies()[0];
    await driver.get("http://localhost:3000/");
  });

  it("Should redirect to user page, when user cookies provided", async () => {
    const navigation = await findByDataTestSelenium("navigation", driver);
    expect(navigation.length).toBe(1);
    const link = (await findByComponentSelenium("a", navigation[0]))[2]; //  user link

    let actions = driver.actions({ async: true });
    await actions.move({ origin: link }).press().release().perform();

    await driver.wait(until.urlIs("http://localhost:3000/user"), 3000);
    const url = await driver.getCurrentUrl();
    expect(url).toBe(`http://localhost:3000/user`);
  });

  // it("Should update first name", async () => {
  //   let firstNameValue = (
  //     await findByDataTestSelenium("first-name", driver)
  //   )[0];
  //   firstNameValue = await firstNameValue.getText();
  //   expect(firstNameValue).toBe(firstName);

  //   const button = (await findByDataTestSelenium("button", driver))[0]; //  first name edit button

  //   let actions = driver.actions({ async: true });
  //   await actions.move({ origin: button }).press().release().perform();

  //   let editBox;
  //   await driver.wait(async () => {
  //     editBox = await findByDataTestSelenium("edit-box", driver);
  //     return editBox.length === 1;
  //   }, 3000);
  //   expect(editBox.length).toBe(1);
  //   editBox = editBox[0];

  //   const inputs = await findByDataTestSelenium("input", driver);
  //   expect(inputs.length).toBe(1);
  //   const newFirstNameInput = inputs[0];

  //   await newFirstNameInput.sendKeys(newFirstName);

  //   const editBoxButtons = await findByDataTestSelenium("button", driver);
  //   expect(editBoxButtons.length).toBe(2);
  //   const acceptButton = editBoxButtons[0];

  //   actions = driver.actions({ async: true });
  //   await actions.move({ origin: acceptButton }).press().release().perform();

  //   await driver.wait(async () => {
  //     editBox = await findByDataTestSelenium("edit-box", driver);
  //     return editBox[0] ? false : true;
  //   }, 3000);

  //   firstNameValue = (await findByDataTestSelenium("first-name", driver))[0];
  //   firstNameValue = await firstNameValue.getText();
  //   expect(firstNameValue).toBe(newFirstName);
  // });

  // it("Should logout a user", async () => {
  //   const button = (await findByDataTestSelenium("button", driver))[5]; //  Log me out

  //   const actions = driver.actions({ async: true });
  //   await actions.move({ origin: button }).press().release().perform();

  //   await driver.wait(until.urlIs("http://localhost:3000/login"), 3000);
  //   const url = await driver.getCurrentUrl();
  //   expect(url).toBe(`http://localhost:3000/login`);

  //   const cookie = await driver.manage().getCookies();
  //   expect(cookie).toStrictEqual([]);
  // });

  // it("Should redirect to login page when no user provided", async () => {
  //   await driver.get("http://localhost:3000/user");
  //   await driver.wait(until.urlIs("http://localhost:3000/login"), 3000);
  //   const url = await driver.getCurrentUrl();
  //   expect(url).toBe(`http://localhost:3000/login`);
  // });
  // it("Should fetch a user if cookie is provided", async () => {
  //   await driver.get("http://localhost:3000/user");
  //   await driver.wait(until.urlIs("http://localhost:3000/login"), 3000);
  //   const url = await driver.getCurrentUrl();
  //   expect(url).toBe(`http://localhost:3000/login`);
  // });
});
