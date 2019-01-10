<template>
<div class="searchResultWrapper">   
    <b-container fluid class="searchInput">
       <b-container>
          <b-row>
          <b-col>
            <input type="text" placeholder="Search for a movie, tv show, person..." class="searchInput" id="searchText"/>
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
     this.$store.dispatch('loadMovies', {currentPage: 1})
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
    width: 100%;
    border: 0px none;
}

.searchInput input::placeholder {
  color: #ada49f;
  font-size: 20px;
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

input#searchText {
    padding: 10px 0;
    font-size: 20px;
    color: #ada49f;
}

.searchInput.container-fluid {
    border-bottom: 2px solid #f2f2f2;
}
</style>