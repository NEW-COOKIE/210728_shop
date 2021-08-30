import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';

//声明使用插件
Vue.use(VeeValidate);// validate/ errors/ $validator

//指定提示文本的为中文
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  //根据name属性名映射对应的中文提示者名称
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})

//自定义验证模块
VeeValidate.Validator.extend('mobile', {
  //验证函数
  validate: value => {
    return /^1\d{10}$/.test(value);
  },
  getMessage: field => field + '必须是11位手机号码'
})
