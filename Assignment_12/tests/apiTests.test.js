const request = require("supertest");
const app = require("../api/app"); // Adjust the path to your app.js file

describe("API Tests", () => {
  test("Should fetch all operators", async () => {
    const response = await request(app).get("/api/operators");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Should create a new operator", async () => {
    const operator = { operatorID: "1", name: "John Doe", email: "john@example.com" };
    const response = await request(app).post("/api/operators").send(operator);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(operator);
  });

  test("Should send reminders for expiring licenses", async () => {
    const response = await request(app).post("/api/reminders/send");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Reminders sent successfully.");
  });
});