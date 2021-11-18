import axios from "axios";
import { API } from "../constants/routes";

export function makeTimeApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.TIME}`,
  });
}

export async function getTotalTime(api = makeTimeApi()) {
  return api.get(``);
}

export async function addTime(time: string | number, api = makeTimeApi()) {
  return api.post(``, { time: time });
}
