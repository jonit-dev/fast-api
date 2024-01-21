// create custom axios config  to avoid this  const response = await axios.get(`${appEnv.general.apiURL}/posts`);

import axios from "axios";
import { appEnv } from "./appEnv";

export const API_REQUEST = axios.create({
  baseURL: appEnv.general.apiURL,
});
