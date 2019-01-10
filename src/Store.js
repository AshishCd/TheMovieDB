import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    mainTitle: "The Movie DB",
    movies: [], 
    currentPage : 1,
    totalPages:1
  },
  actions: {
    loadMovies({commit}, {currentPage} ) { 
      console.log(currentPage, 'HAHAHAHA')     
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=5f2c030f1a7d00715ae868ea96dfaeef&language=en-US&page=${currentPage}&region=US`)
        .then(({data}) => {
          console.log(data)
          let moviesData = data.results;
          //let movisRelease = data.page;          
          let totalPages = data.total_pages;         
          commit('SEARCHED_MOVIES', moviesData);
          //commit('CURRENT_PAGES', currentPage);
          commit('TOTAL_PAGES', totalPages);
        })
        .catch(error => {
          console.log(console.error);
        });
    }
  },
  mutations: {
    SEARCHED_MOVIES(state, moviesData) {     
      state.movies = moviesData;
    },
    // CURRENT_PAGES(state, currentPage){
    //   state.currentPage = currentPage;
    // },
    TOTAL_PAGES(state, totalPages){
      state.totalPages = totalPages;
    }
  }
});
