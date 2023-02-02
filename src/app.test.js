import app from "./app.js";
import supertest from "supertest";
import * as ophandler from "./mockTest.js";
const request = supertest(app);

describe("/test endppint", () => {
  it("Should return a response", async () => {
    jest.spyOn(ophandler, "testFunction").mockReturnValue("tttttt");
    await request
      .get("/test")
      .set({ authorization: "token" })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(JSON.parse(response.text)).toEqual({ message: "tttttt" });
      });
  });
});
