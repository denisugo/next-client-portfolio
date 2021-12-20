import { getServerSideProps } from "../../pages/index";

import * as UserSlice from "../../features/UserSlice/UserSlice";

describe("getServerSideProps in index.js", () => {
  let context;

  beforeEach(() => {
    //  Setup for fetch redux
    fetch.resetMocks();
    //  Setup for react redux
    UserSlice.initUser = jest.fn().mockReturnValue({ type: "", payload: {} });
    // Setup for context
    context = {
      req: { cookies: { "connect.sid": "asswa" } },
      res: { setHeader: jest.fn() },
    };
  });

  it("Should return list", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => {
        return { user: {}, products: [{}, {}] };
      },
    });

    const { props } = await getServerSideProps(context);

    expect(typeof props).toBe("object");
    expect(props.user).not.toBe(null);
    expect(Array.isArray(props.list)).toBe(true);
    expect(UserSlice.initUser.mock.calls.length).toBe(1);
    // expect(props.isMobile).toBe(false);
  });

  it("Should return null in list if response is not ok ", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: () => {
        return { user: {}, products: [{}, {}] };
      },
    });

    const { props } = await getServerSideProps(context);

    expect(typeof props).toBe("object");
    expect(props.list).toBe(null);
    expect(UserSlice.initUser.mock.calls.length).toBe(0);
    // expect(props.isMobile).toBe(false);
  });

  it("Should return a list but not set up a user if no cookie provided", async () => {
    context.req.cookies = {};
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => {
        return { user: undefined, products: [{}, {}] };
      },
    });

    const { props } = await getServerSideProps(context);

    expect(typeof props).toBe("object");
    expect(props.list).not.toBe(null);
    expect(UserSlice.initUser.mock.calls.length).toBe(0);
    expect(context.res.setHeader.mock.calls.length).toBe(0);
    // expect(props.isMobile).toBe(false);
  });
  it("Should return a list but not set up a user and delete cookie if provided cookie is incorrect", async () => {
    context.req.cookies = { "connect.sid": "afsd" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => {
        return { user: undefined, products: [{}, {}] };
      },
    });

    const { props } = await getServerSideProps(context);

    expect(typeof props).toBe("object");
    expect(props.list).not.toBe(null);
    expect(UserSlice.initUser.mock.calls.length).toBe(0);
    expect(context.res.setHeader.mock.calls.length).toBe(1);
    // expect(props.isMobile).toBe(false);
  });
});
