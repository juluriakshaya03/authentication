jest.mock("../../controllers/user.controller"); // от корня до mock-файла

import express from "express";
import request from "supertest";
import userRoutes from "../../routes/user.routes";

const app = express();
app.use(express.json());
app.use("/", userRoutes);

describe("User Routes", () => {
  it("GET / should return mocked user list", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].name).toBe("Mock User");
  });

  it("POST /add should return created user", async () => {
    const res = await request(app)
      .post("/add")
      .send({ name: "Alice", email: "alice@example.com" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Alice");
  });
});