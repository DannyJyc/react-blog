import axios from "axios";
import { MessageBox, Message } from "element-ui";
import { notification } from "antd";
import store from "@/store";
import { getToken } from "@/utils/auth";

const [api] = notification.useNotification();
const confirmReLogin = (key) => {
  api.destroy(key);
  store.dispatch("user/resetToken").then(() => {
    location.reload();
  });
};
const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Space>
      <Button type="link" size="small" onClick={() => api.destroy()}>
        取消
      </Button>
      <Button type="primary" size="small" onClick={() => confirmReLogin(key)}>
        重新登录
      </Button>
    </Space>
  );
  api.open({
    message: "确 认 注 销",
    description: "您已登出，您可以取消以留在此页面，或重新登录。",
    btn,
    key,
    onClose: close,
  });
};
const openNormalNotification = (message, description) => {
  api.info({
    message,
    description,
    placement: "topRight",
  });
};
// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:5051", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      openNormalNotification("警告", res.message || "Error");
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 508 || res.code === 512 || res.code === 514) {
        // to re-login
        openNotification();
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    openNormalNotification("警告", error.message);
    return Promise.reject(error);
  }
);

export default service;
