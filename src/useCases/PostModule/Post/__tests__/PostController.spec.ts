import { API_REQUEST } from "@constants/axiosConstants";
import { describe, expect, it } from "vitest";
import { createPostMock, readAllPostsMock } from "./PostControllerMocks";

describe("PostController", () => {
  it("fetch available users", async () => {
    const response = await API_REQUEST.get("/posts");

    const posts = response.data;

    expect(posts).toStrictEqual(readAllPostsMock);
  });

  it("should properly create a new user", async () => {
    const response = await API_REQUEST.post("/posts", createPostMock);

    const newPost = response.data;

    expect(newPost).toStrictEqual(createPostMock);
  });
});
