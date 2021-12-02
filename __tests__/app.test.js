import { shallow } from "enzyme";
import React from "react";

import App from "../pages/index.js";
import { findByDTextChildren } from "../utils/testUtils.js";

describe("With Enzyme", () => {
  it('App shows "Hello"', () => {
    const wrapper = shallow(<App />);

    const found = findByDTextChildren("Hello", wrapper);

    expect(found.length).toBe(1);
  });
});
