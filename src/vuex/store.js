/*
vuex最核心的管理模块store
 */

import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import msite from './modules/msite.js';
import shop from './modules/shop.js';
import user from './modules/user.js';

Vue.use(Vuex);

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules: {
        msite,
        shop,
        user
    }
});

/*
总的结构
{
    msite: {a: 1},
    shop: {b: 2},
    user: {c: []}
}
 */
