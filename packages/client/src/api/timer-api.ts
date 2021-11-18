import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API } from "../constants/routes";

export function makeTimeApi(): AxiosInstance {
  return axios.create({
    baseURL: `${API.MAIN}${API.TIME}`,
  });
}

export async function getTotalTime(
  api = makeTimeApi(),
): Promise<AxiosResponse> {
  return api.get(``);
}

export async function addTime(
  time: string | number,
  api = makeTimeApi(),
): Promise<AxiosResponse> {
  return api.post(``, { time: time });
}
