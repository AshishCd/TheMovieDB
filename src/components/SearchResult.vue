<template>
<div class="searchResultWrapper">
    <b-container fluid class="searchHeader">      
      <h1>{{mainTitle}}</h1>
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
</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "searchResult",
  computed: {
    ...mapState(["mainTitle"])
  }
};
</script>
<style scoped>
.searchHeader {
  background-color: #000;
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