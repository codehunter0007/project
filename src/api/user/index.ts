//统一管理项目用户相关接口
import request from "@/utils/request";
import type { loginForm, loginResponseData,userResponseData } from "./type";

//统一管理接口
enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}

export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data);

export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL);