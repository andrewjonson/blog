import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth'  
import user from './modules/user' 
import post from './modules/post'  

export default new Vuex.Store({
        modules: {
            auth,
            user,
            post
        }
    }
)