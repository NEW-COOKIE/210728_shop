/*
对ajax2次进行封装一个能发送ajax请求的函数
*/

import axios from 'axios';
import qs from 'qs';
import { Indicator, Toast, MessageBox } from 'mint-ui';
import store from '@/vuex/store.js'
import router from '@/router';

const instance = axios.create({
    // baseURL: 'http://localhost:4000', //出跨域请求问题
    baseURL: '/api', //让代理服务器转发请求
    timeout: 20000 //4.设置请求超时的时间
})

// 请求拦截器request
instance.interceptors.request.use((config) => {

    //6.显示loading
    Indicator.open();
    //3.对请求体参数经行urlencode处理，而不用默认的json方式（后台接口不支持）
    const data = config.data;
    if (data instanceof Object) {
        config.data = qs.stringify(data)
    }

    //5通过请求头携带token数据
    const token = store.state.token;

    if (token) {
        config.headers['Authorization'] = token;
    } else {
        //如果当前接口需要token，当前没有token, 不发请求， 进入错误流程
        const needCheck = config.headers.needCheck;
        //如果需要token, 但又没有token, 不能发请求
        if (needCheck) {
            throw new Error('没有登录，不能请求');
        }
    }



    return config;
})

// 相应拦截器response
instance.interceptors.response.use(
    response => {
        //隐藏loadin
        Indicator.close();

        // return response;
        //2.异步请求成功的数据不是response，而是response.data
        return response.data;
    },
    error => {
        //隐藏loadin
        Indicator.close();
        const response = error.response;
        if (!response) {
            router.replace('/login');
            Toast(error.message);
        } else {
            //发了请求错误
            //如果响应状态是401，且当前没在登录页面 退出登录(清除数据/跳到登录页面)
            if (error.response.status === 401) {
                const path = router.currentRroute.path;
                if (path !== '/login') {
                    store.dirspatch('logout');
                    router.replace('/login');
                    Toast('登录过期')
                }
            } else {
                //1.统一处理请求异常
                MessageBox('提示', '请求出错:' + error.message)
            }
        }

        // return Promise.reject(error);
        return new Promise(() => {})
    }
)

export default instance
