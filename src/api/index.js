/*
包含n个接口请求函数的模块
*/

import ajax from './ajax';

//1.根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`)

//2.获取食品分类列表
export const reqCategorys = () => ajax('/index_category',{
  headers: {
    needCheck: true
  }
})

//3.根据经纬度获取商品列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {
  params: {longitude, latitude},
  headers: {
    needCheck: true
  }
})

//4.发送短信验证码
export const reqSendCode = (phone) => ajax.get('/sendcode', {
  params: {
    phone
  }
});

//5.用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax.post('/login_pwd', {name, pwd, captcha} );
 
//6.手机号验证码登录
export const reqSmslogin = ({phone, code}) => ajax.post('/login_sms', {phone, code});

//7.自动登录
export const reqAutoLogin = () => ajax.get('/auto_login');

export const reqGoods = () => ajax.get('/goods');

export const reqInfo = () => ajax.get('/info');

export const reqRatings = () => ajax.get('/ratings');

