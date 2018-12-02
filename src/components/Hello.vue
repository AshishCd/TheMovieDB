<template>
  <div class="hello">
   
      <searchResult/>       
 
  </div>
</template>

<script>
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "hello",
  data() {
    return {
     
    };
  },
  components: {
    SearchResult
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
