import { getServerSideProps } from "../../pages/index";

describe("getServerSideProps on index.js", () => {
  const context = {
    query: { category: "health", req: { cookies: {} } },
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Should return list,isMobile, user", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => {
        return { user: {}, products: [{}, {}] };
      },
    });

    const { props } = await getServerSideProps(context);

    expect(typeof props).toBe("object");
    expect(typeof props.user).toBe("object");
    expect(props.user).not.toBe(null);
    expect(Array.isArray(props.list)).toBe(true);
    expect(props.isMobile).toBe(false);
  });

  it("Should return null in list and user if response is not ok ", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: () => {
        return { user: {}, products: [{}, {}] };
      },
    });

    const { props } = await getServerSideProps(context);

    expect(typeof props).toBe("object");
    expect(props.user).toBe(null);
    expect(props.list).toBe(null);
    expect(props.isMobile).toBe(false);
  });
});
