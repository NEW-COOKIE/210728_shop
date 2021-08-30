/*
首页模块相关数据
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '@/api';


import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutations-types.js';

export default {
  state: {
    latitude: 22.67513,//纬度
    longitude: 114.00447,//经度
    address: {},//地址信息对象
    categorys: [],//分类数组
    shops: [],//商家数组
  },

  mutations: {
     [RECEIVE_ADDRESS] (state, address) {
        state.address = address
    },

    [RECEIVE_CATEGORYS] (state, categorys) {
        state.categorys = categorys
    },

    [RECEIVE_SHOPS] (state, shpos) {
        state.shops = shpos
    },
  },

  actions: {
    /*
    获取地址信息对象的异步cation
    */
    async getAddress ({commit, state}) {
      const {longitude, latitude} = state;
      // 发送异步请求
      const result = await reqAddress(longitude, latitude)
        // 请求成功后，提交给mutations
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, address)
        }
    },

    /*
    获取商品分类列表对象的异步cation
    */
    async getCategorys ({commit}, callback) {
        // 发送异步请求
      const result = await reqCategorys()
        // 请求成功后，提交给mutations
        if (result.code === 0) {
            const categortys = result.data
            commit(RECEIVE_CATEGORYS, categortys) //内部调用mutation跟新状态数据

            typeof callback === 'function' && callback();
        }
    },

    /*
    获取地址信息对象的异步cation
    */
    async getShops ({commit, state}) {
        const {longitude, latitude} = state;
        // 发送异步请求
        const result = await reqShops({longitude, latitude})
        // 请求成功后，提交给mutations
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, shops)
        }
    },
  },

  getters: {}
}
