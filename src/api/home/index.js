import axios from "../axios.config";
import Qs from "qs";

export function getHistoryBetInfo(data) {
  return axios({
    method: "post",
    url: "/api" + "/doLogin.html",
    data: Qs.stringify({
      userName: data.userName,
      password: data.password,
      ip: data.ip,
      deviceNumber: data.deviceNumber,
      imgCode: data.imgCode,
      version: data.version
    })
  });
}
