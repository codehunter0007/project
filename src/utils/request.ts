//进行axios二次封装：使用请求与响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";

//第一步：利用axios对象的create方法，去创建axios实例(其他的配置：基础路径、超时的时间)
let request = axios.create({
    baseURL: "/api",
    timeout: 5000,
})
//第二步：request实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
    //config.headers.token='123';
    //console.log(config);
    //config配置对象，headers属性请求头，给服务器携带公共参数
    return config;
})
//第三步：响应拦截器
request.interceptors.response.use((response) => {
    //简化数据
    return response.data;
}, (error) => {
    //失败的回调：处理http网络错误
    //定义一个变量：储存网络错误信息
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 201:
            message = "Token过期"
            break;
        case 401:
            message = "Token过期"
            break;
        case 403:
            message = "无权访问"
            break;
        case 404:
            message = "请求地址错误"
            break;
        case 500:
            message = "服务器出现问题"
            break;
        default:
            message = "网络出现问题"
            break;
    }
    ElMessage({
        type: 'error',
        message
    });
    return Promise.reject(error);
})

//对外暴露
export default request;