import App from "../../pages/index.js";
import {
  findByDTextChildren,
  findByDataTest,
  setUp,
} from "../../utils/testUtils.js";

describe("Index page", () => {
  const wrapper = setUp(App);

  it('App shows "Hello"', () => {
    const hello = findByDTextChildren("Hello", wrapper);
    expect(hello.length).toBe(1);
  });

  it("Should render header", () => {
    const header = findByDataTest("header", wrapper.find("Header").dive());
    expect(header.length).toBe(1);
  });
});
