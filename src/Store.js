import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state:{
        mainTitle:"The Movie DB"
    },
    actions:{
        loadMovies(){
            
        }
    },
    mutations:{

    }
})