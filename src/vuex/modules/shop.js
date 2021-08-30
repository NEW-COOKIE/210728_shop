/*
商家模块相关数据
 */
import Vue from 'vue';

import {
  reqGoods,
  reqInfo,
  reqRatings
} from '@/api';

import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutations-types';

export default {
  state: {
    goods: [],//商品列表
    ratings: [],//商家评价列表
    info: {}//商家信息
  },

  mutations: {
    [RECEIVE_GOODS] (state, {goods}) {
        state.goods = goods;
    },

    [RECEIVE_INFO] (state, {info}) {
        state.info = info;
    },

    [RECEIVE_RATINGS] (state, {ratings}) {
        state.ratings = ratings;
    },

    [ADD_FOOD_COUNT] (state, {food}) {
        if (food.count) {
            food.count ++;
        }else {
            //如果food没有count属性 给food添加一个新的count属性
            // food.count = 1;
            Vue.set(food, 'count', 1);
        }
    },

    [REDUCE_FOOD_COUNT] (state, {food}) {
      if (food.count > 0) {
          food.count --;
      }
    }
  },

  actions: {
    async getGoods({commit}, callback) {
      const result = await reqGoods()
      if (result.code === 0) {
        const goods = result.date;
        commit(RECEIVE_GOODS, {goods})

        typeof callback === 'function' && callback();
      }
    },

    async getRatings({commit}, callback) {
      const result = await reqRatings()
        if (result.code === 0) {
          const ratings = result.date;
          commit(RECEIVE_RATINGS, {ratings});
          
          typeof callback === 'function' && callback();
        }
    },

    async getInfo({commit}, callback) {
      const result = await reqInfo();
      if (result.code === 0) {
        const info = result.date;
        commit(RECEIVE_INFO, {info});

        typeof callback === 'function' && callback();
      }
    },

    /*
    更新food中的数量同步action
    */
    updateFoodCount({commit}, {isAdd, food}) {
      if (isAdd) {
        commit(ADD_FOOD_COUNT, {food})
      }else {
        commit(REDUCE_FOOD_COUNT, {food})
      }
    }
  },

  getters: {}
}
