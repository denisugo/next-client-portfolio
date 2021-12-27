import orders from "../../pages/orders";
import * as reactRedux from "react-redux";
import React from "react";
import * as UserSlice from "../../features/UserSlice/UserSlice";
import * as router from "next/router";
import {
  findByDTextChildren,
  findByDataTest,
  setUp,
  findByComponent,
} from "../../utils/testUtils.js";

describe("Orders page", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("Rendering", () => {
    beforeEach(() => {
      //*  Redux router setup
      reactRedux.useSelector = jest.fn().mockReturnValue(true);
      UserSlice.selectUser = jest.fn();

      //*  Next.js router setup
      router.default.push = jest.fn();

      //* mocking fetch
      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => [
          { quantity: 2, price: 100 },
          { quantity: 1, price: 50 },
          { quantity: 4, price: 25 },
        ],
      });

      jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());

      wrapper = setUp(orders);
    });

    it("Should render orders page", () => {
      const name = findByDataTest("name", wrapper);
      expect(name.length).toBe(3);

      const quantity = findByDataTest("quantity", wrapper);
      expect(quantity.length).toBe(3);
    });
  });
  describe("Redirecting", () => {
    it("Should redirect to login page", () => {
      //  Redux router setup
      reactRedux.useSelector = jest.fn().mockReturnValue(false);
      UserSlice.selectUser = jest.fn();

      //  Next.js router setup
      router.default.push = jest.fn();

      // mocking fetch
      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => [{}, {}, {}],
      });

      jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());

      wrapper = setUp(orders);

      expect(router.default.push.mock.calls.length).toBe(1);
    });
  });
});
