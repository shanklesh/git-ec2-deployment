import app from "./app.js";
import supertest from "supertest";

const request = supertest(app);

describe("/test endppint", () => {
  it("Should return a response", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual({
      message: "testMockdsdsxzxzxz",
    });
  });
  it("Should return a response", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual({
      message: "testMockdsdsxzxzxz",
    });
  });
});
