<template>
   <b-container>
       <b-row>
           <b-col>             
               <h3 class="sectionHead">Popular Movies</h3></b-col>
       </b-row>
       <b-row>                   
       <b-col cols="6" v-for="(movie, index) in movies" :key="index">
         <div class="cardWrap">
           <b-row class="rowCard">
               <b-col cols="4">
                   <div class="image_content">
                   <a class="img-result">                  
                     <img :src="'https://image.tmdb.org/t/p/w500/' + `${movie.poster_path}`">
                    </a>
                   </div>
                   </b-col>
               <b-col cols="8">                  
                   <div class='info'>
                        <div class="wrapperName">                       
                           <div class="nameRight">
                               <div class="outerVote">
                                   <div class="innerVote">{{movie.vote_average}}</div>
                                   </div>
                                   <div>
                               <a>{{movie.title}}</a>
                               <span>October  5, 2018</span>
                                   </div>
                           </div>
                       </div>
                       <p class="overView">{{movie.overview | truncate(100, '...') }}</p>
                       <p class="view_more"><a>More Info</a></p>
                       </div>
                   </b-col>
           </b-row>  
           </div>        
       </b-col>                
       </b-row>
       <b-row class="marginVertical">
         <b-col> <b-pagination align="center" :total-rows="totalPages" v-model="currentPage" :per-page="10">
    </b-pagination></b-col>
       </b-row>
   </b-container> 
  
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "popularMovie",
  components: {
    
  },
  computed: {
    ...mapState(["movies", "currentPage", "totalPages"])
  },
  mounted() {
    this.$store.dispatch("loadMovies");
  },
  methods: {
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    }
  },
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  }
};
</script>

<style>
.info {
  box-sizing: border-box;
  padding: 10px 10px 0px 20px;
}

.overView {
  word-wrap: break-word;
  white-space: normal;
  color: #4d4d4d;
  font-size: 0.9em;
  line-height: 1.2em;
  margin-top: 30px;
  font-size: 15px;
  font-family: verdana;
  line-height: 1.5em;
}

.image_content {
  width: 185px;
  height: 278px;
}

.image_content a {
  width: 100%;
  height: 100%;
  display: block;
  line-height: 0;
}

.image_content img {
  width: 185px;
  height: 278px;
}

.cardWrap {
  -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
  margin: 10px;
  min-height: 278px;
}

.cardRow {
  padding: 10px;
}

.itemsCard {
  display: flex;
  align-items: center;
}

.nameRight a {
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.5em;
}

.nameRight span {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1em;
}

p.view_more {
  border-top: 1px solid #e3e3e3;
  padding-top: 10px;
  margin-bottom: 0px !important;
}

h3.sectionHead {
  margin-top: 10px;
  border-bottom: 1px solid #046e49;
  padding-bottom: 5px;
}

.outerVote {
  margin-right: 10px;
  background: #000;
  padding: 6px;
  border-radius: 50%;
  color: #ffffff;
}
.innerVote {
  background: #9c0508;
  padding: 11px;
  border-radius: 50%;
  color: #ffffff;
  min-width: 44px;
  text-align: center;
}

.nameRight {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.marginVertical{
  margin-top:20px;
  margin-bottom: 30px
}

.container-fluid.mainWrap {
    margin-top: 30px;
}

/*Circular Progress*/
</style>