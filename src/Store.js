import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    mainTitle: "The Movie DB",
    movies: []
  },
  actions: {
    loadMovies({ commit }) {
      axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=5f2c030f1a7d00715ae868ea96dfaeef&language=en-US&page=1&region=US")
        .then(data => {
          let moviesData = data.data;
          console.log(moviesData);
          commit('SEARCHED_MOVIES', moviesData);
        })
        .catch(error => {
          console.log(console.error);
        });
    }
  },
  mutations: {
    SEARCHED_MOVIES(state, moviesData) {
      console.log("hey", moviesData);
      state.movies = moviesData;
    }
  }
});
