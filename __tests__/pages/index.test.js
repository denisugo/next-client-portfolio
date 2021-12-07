import App from "../../pages/index.js";
import {
  findByDTextChildren,
  findByDataTest,
  setUp,
  findByComponent,
} from "../../utils/testUtils.js";

describe("Index page", () => {
  const wrapper = setUp(App);

  it("Should render header", () => {
    const header = findByComponent("Header", wrapper);
    expect(header.length).toBe(1);
  });
  it("Should render productlist", () => {
    const productlist = findByComponent("ProductList", wrapper);
    expect(productlist.length).toBe(1);
  });
});
