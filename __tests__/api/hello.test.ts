import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import { describe, it, expect } from "@jest/globals";

import hello from "../../src/pages/api/hello";

const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
  method: "GET",
});

describe("Hello Endpoint", () => {
  it("Calls hello endpoint", () => {
    hello(req, res);
    const jsonData = res._getJSONData();
    expect(jsonData.name).toEqual("John Doe");
  });
});
