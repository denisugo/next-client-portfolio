import Search from "../../components/Search/Search.js";
import {
  findByComponent,
  findByDataTest,
  findByDTextChildren,
  setUp,
} from "../../utils/testUtils.js";

describe("Search", () => {
  const wrapper = setUp(Search);

  it("Should render search", () => {
    const search = findByDataTest("search", wrapper);
    expect(search.length).toBe(1);
  });
  it("Should render searchByCategory", () => {
    const searchByCategory = findByDataTest("select-by-category", wrapper);
    expect(searchByCategory.length).toBe(1);
  });
  it("Should render searchBar", () => {
    const searchBar = findByComponent("Input", wrapper);
    expect(searchBar.length).toBe(1);
  });
});
