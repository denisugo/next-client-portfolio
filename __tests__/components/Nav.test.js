import Nav from "../../components/Nav/Nav.js";
import {
  findByDataTest,
  findByDTextChildren,
  setUp,
} from "../../utils/testUtils.js";

describe("Nav", () => {
  const wrapper = setUp(Nav);

  it("Should render the nav", () => {
    const nav = findByDataTest("nav", wrapper);
    expect(nav.length).toBe(1);
  });

  it("Should render the navigation", () => {
    const navigation = findByDataTest("navigation", wrapper);
    expect(navigation.length).toBe(1);
  });

  it("Should render the logo", () => {
    const logo = findByDataTest("logo", wrapper);
    expect(logo.length).toBe(1);
  });
});
