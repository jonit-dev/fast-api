import { appEnv } from "@constants/appEnv";
import { HttpResponse, http } from "msw";
import { createPostMock, readAllPostsMock } from "./PostControllerMocks";

const getAllPosts = http.get(`${appEnv.general.apiURL}/posts`, () => {
  return HttpResponse.json(readAllPostsMock);
});

const createPost = http.post(`${appEnv.general.apiURL}/posts`, () => {
  return HttpResponse.json(createPostMock);
});

export const postControllerHandlers = [getAllPosts, createPost];
