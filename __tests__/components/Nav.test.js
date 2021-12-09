import Nav from "../../components/Nav/Nav.js";
import { routes } from "../../config/constants.js";
import {
  findByDataTest,
  findByDTextChildren,
  setUp,
} from "../../utils/testUtils.js";

describe("Nav", () => {
  const props = { user: null };
  const wrapper = setUp(Nav, props);

  it("Should render the nav", () => {
    const nav = findByDataTest("nav", wrapper);
    expect(nav.length).toBe(1);
  });

  it("Should render the navigation", () => {
    const navigation = findByDataTest("navigation", wrapper);
    expect(navigation.length).toBe(1);
  });

  it("Should render link to /login", () => {
    const login = findByDataTest("link-to-login-or-user", wrapper);
    expect(login.length).toBe(1);
    expect(login.get(0).props).toHaveProperty("href", routes.login);
  });

  it("Should render link to /user", () => {
    // reassign values
    const props = { user: { id: 1 } };
    const wrapper = setUp(Nav, props);
    const user = findByDataTest("link-to-login-or-user", wrapper);
    expect(user.length).toBe(1);
    expect(user.get(0).props).toHaveProperty("href", routes.user);
  });

  it("Should render the logo", () => {
    const logo = findByDataTest("logo", wrapper);
    expect(logo.length).toBe(1);
  });
});
