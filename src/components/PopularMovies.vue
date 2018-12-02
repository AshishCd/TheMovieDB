<template>

   <b-container>
       <b-row>
           <b-col>Popular Movies</b-col>
       </b-row>
       <b-row class="cardRow">
       <b-col class="cardWrap">
           <b-row>
               <b-col cols="4">
                   <div class="image_content">
                   <a class="img-result"><img src="https://image.tmdb.org/t/p/w500//2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" /></a>
                   </div>
                   </b-col>
               <b-col cols="8">                  
                   <div class='info'>
                        <div class="wrapperName">                       
                           <div class="nameRight">
                               <a>Venom</a>
                               <span>October  5, 2018</span>
                           </div>
                       </div>
                       <p class="overView">Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’. The Foundation has discovered creatures...
                       </p>
                       <p class="view_more"><a>More Info</a></p>
                       </div>
                   </b-col>
           </b-row>
       </b-col>
        <b-col class="cardWrap">
           <b-row>
               <b-col cols="4">
                   <div class="image_content">
                   <a class="img-result"><img src="https://image.tmdb.org/t/p/w500//2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" /></a>
                   </div>
                   </b-col>
               <b-col cols="8">                  
                   <div class='info'>
                        <div class="wrapperName">                       
                           <div class="nameRight">
                               <a>Venom</a>
                               <span>October  5, 2018</span>
                           </div>
                       </div>
                       <p class="overView">Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’. The Foundation has discovered creatures...
                       </p>
                       </div>
                   </b-col>
           </b-row>
       </b-col>    
       </b-row>
   </b-container>


</template>

<script>
export default {
  name: "popularMovie"
};
</script>

<style>
.info {
   
    box-sizing: border-box;
    padding: 10px 16px 0px 16px;
    }

.overView{
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
width:185px;
height: 278px;
}

.image_content a {
   width: 100%;
    height: 100%;
    display: block;
    line-height: 0;
}

.image_content img {
  width:185px;
height: 278px;
}

.cardWrap {
    -webkit-box-shadow: 0 2px 14px rgba(0,0,0,0.3);
    box-shadow: 0 2px 14px rgba(0,0,0,0.3);
    padding: 10px;
    margin: 10px;
}

.cardRow{
    padding:10px
}

.itemsCard {
display: flex;
align-items: center;
}

.nameRight a {
    width: 100%;
    display: block;
    font-weight: 600;
    font-size: 1.1em;
    line-height: 1.1em;
}

.nameRight span {
    color: rgba(0,0,0,0.6);
    line-height: 1em;
}

p.view_more {
    border-top: 1px solid #e3e3e3;   
    padding-top: 10px;
}

/*Circular Progress*/


</style>