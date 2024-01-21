import { describe } from "node:test";
import { app } from "server";
import request from "supertest";
import { test } from "vitest";

describe("Post Controller E2E", () => {
  test("GET /posts", async ({ expect }) => {
    const response = await request(app).get("/posts").expect("Content-Type", /json/).expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          body: expect.any(String),
          tags: expect.arrayContaining([expect.any(String)]),
          id: expect.any(String),
        }),
      ])
    );
  });
});
