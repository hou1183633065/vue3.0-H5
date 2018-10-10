/**
 * http配置
 */
import axios from "axios";
import { Toast } from "vant";
// 超时时间
axios.defaults.timeout = 15000;
// axios.defaults.headers.common['t'] =  localStorage.getItem('token').toString()
// http请求拦截器
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    config.headers.t = localStorage.getItem("token")
      ? localStorage.getItem("token").toString()
      : "";
    Toast.loading({
      mask: true,
      message: "加载中..."
    });
    return config;
  },
  error => {
    Toast.clear();
    Toast.fail("加载超时");
    return Promise.reject(error);
  }
);
// http响应拦截器
axios.interceptors.response.use(
  data => {
    // 响应成功关闭loading
    Toast.clear();
    if (!data.data.success && data.data.message && data.data.message != "") {
      Toast.fail(data.data.message);
    }
    return data.data;
  },
  error => {
    Toast.clear();
    Toast({
      message: "数据请求失败，请稍后再试",
      position: "bottom"
    });
    return Promise.reject(error);
  }
);

export default axios;
