/*
用户模块相关数据
 */
import {
  reqAutoLogin
} from '@/api';

import {
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_TOKEN,
  RESET_USER
} from '../mutations-types.js';


export default {
  state: {
    user: {},//用户信息
    token: localStorage.getItem('token_key') || '',//当前用户登录标记
  },

  mutations: {
    [RECEIVE_TOKEN] (state, {token}) {
      state.token = token
    },

    [RECEIVE_USER] (state, {user}) {
        state.user = user
    },

    [RESET_TOKEN] (state) {
      state.token = '';
    },

    [RESET_USER] (state) {
        state.user = {};
    },
  },

  actions: {
    saveUser ({commit}, user) {
      const token = user.token;

      //将token保存到local
      localStorage.setItem('token_key', token);

      //删除user内部的token
      delete user.token;

      //将user保存到state
      commit(RECEIVE_USER, {user});

      //将token保存到state
      commit(RECEIVE_TOKEN, {token});

    },

    /*
    自动登录的异步
    */
    async autoLogin({commit, state}) {
        if (state.token && !state.user._id) { //必须有token，且没有user
            //发送自动登录请求
            const result = await reqAutoLogin()

            if (result.code === 0) {
                const user = result.data;
                commit(RECEIVE_USER, {user});
            }
        }

    },

    logout({commit}) {
        localStorage.removeItem('token_key');
        commit(RESET_USER);
        commit(RESET_TOKEN);
    }
  },

  getters: {}
}
