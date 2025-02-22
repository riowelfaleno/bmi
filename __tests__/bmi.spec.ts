import request from "supertest";
import { app } from "../index";

describe("GET /api/bmi", () => {
  // Normal weight
  it("should calculate BMI correctly and return classification", async () => {
    const res = await request(app)
      .get("/api/bmi")
      .query({ weight: 70, height: 1.75 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ bmi: 22.86, classification: "Normal weight" });
  });

  // Obese
  it("should calculate BMI correctly and return classification", async () => {
    const res = await request(app)
      .get("/api/bmi")
      .query({ weight: 100, height: 1.6 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ bmi: 39.06, classification: "Obese" });
  });

  it("should return an error for invalid parameters", async () => {
    const res = await request(app)
      .get("/api/bmi")
      .query({ weight: -70, height: 0 });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "Invalid parameters" });
  });

  it("should return an error if parameters are missing", async () => {
    const res = await request(app).get("/api/bmi");
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "Invalid parameters" });
  });
});
