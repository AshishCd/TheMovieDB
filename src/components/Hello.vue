<template>
  <div class="hello">
    <Header/>
      <searchResult/> 
      <Footer />      
 
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "hello",
  data() {
    return {
     
    };
  },
  components: {
    SearchResult,
    Footer,
    Header
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
