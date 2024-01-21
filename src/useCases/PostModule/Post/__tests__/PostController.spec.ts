import { appEnv } from "@constants/appEnv";
import axios from "axios";
import { describe, expect, it } from "vitest";
import { createPostMock, readAllPostsMock } from "./PostControllerMocks";

describe("PostController", () => {
  it("fetch available users", async () => {
    console.log("appEnv.general.apiURL", appEnv.general.apiURL);

    const response = await axios.get(`${appEnv.general.apiURL}/posts`);

    const posts = response.data;

    expect(posts).toStrictEqual(readAllPostsMock);
  });

  it("should properly create a new user", async () => {
    const response = await axios.post(`${appEnv.general.apiURL}/posts`, createPostMock);

    const newPost = response.data;

    expect(newPost).toStrictEqual(createPostMock);
  });
});
