import Search from "../../components/Search/Search.js";
import {
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
  //   it("Should render searchByCategory", () => {
  //     const searchByCategory = findByDataTest("searchByCategory", wrapper);
  //     expect(searchByCategory.length).toBe(1);
  //   });
  //   it("Should render searchBar", () => {
  //     const searchBar = findByDataTest("searchBar", wrapper);
  //     expect(searchBar.length).toBe(1);
  //   });
});
