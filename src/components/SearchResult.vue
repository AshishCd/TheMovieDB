<template>
<div class="searchResultWrapper">
    <b-container fluid class="searchHeader">      
      <h1>{{mainTitle}} {{movies.total_results}}</h1>
      <h2 v-for="(item, index) in movies" :key="index">{{item}}</h2>
    </b-container>
    <b-container fluid class="searchInput">
       <b-container>
          <b-row>
          <b-col>
            <input type="text" placeholder="Search" class="searchInput" id="searchText"/>
          </b-col>
          </b-row>
        </b-container>
    </b-container>
    <b-container fluid>
      <b-container>
        <b-row>
          <PopularMovie/>
        </b-row>
      </b-container>
    </b-container>
</div>
</template>
<script>
import PopularMovie from "@/components/PopularMovies.vue"
import { mapState, mapActions } from "vuex";
export default {
  name: "searchResult",  
  computed: {
    ...mapState(["mainTitle", "movies"]),
    
  },
  mounted(){
     this.$store.dispatch('loadMovies')
  },
  components:{
    PopularMovie
  }
};
</script>
<style scoped>
.searchHeader {
  background-color: #fff;
  min-height: 100px;
}

.searchInput {
  background-color: #fff;
  height: 46px;
  border-bottom: 1px solid #dedede;
  width: 100%;
}

searchInput {
  border-radius: 0;
  padding: 0 30px;
  height: 46px;
  box-sizing: border-box;
  border: none !important;
  outline: none;
  font-family: Arial, sans-serif;
  font-style: italic;
}
</style>