<template>
 <b-container fluid class="headerFull">
    <b-container>
      <b-row>
          <b-col cols="6">
              <ul class="primary">
          
            <li class="logo">
              <a href="/">
                <img src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="81" height="72">
              </a>
            </li>
            <li>
              <a href="/discover">Discover</a>
              <ul class="sub_menu discover hide" style="display: none;">
                <li><a href="/discover/movie">Movies</a></li>
                <li><a href="/discover/tv">TV Shows</a></li>
              </ul>
            </li>
            <li>
              <a href="/movie">Movies</a>
              <ul class="sub_menu movie hide" style="display: none;">
                <li><a href="/movie">Popular</a></li>
                <li><a href="/movie/top-rated">Top Rated</a></li>
                <li><a href="/movie/upcoming">Upcoming</a></li>
                <li><a href="/movie/now-playing">Now Playing</a></li>
              </ul>
            </li>
            <li>
              <a href="/tv">TV Shows</a>
              <ul class="sub_menu tv hide" style="display: none;">
                <li><a href="/tv">Popular</a></li>
                <li><a href="/tv/top-rated">Top Rated</a></li>
                <li><a href="/tv/on-the-air">On TV</a></li>
                <li><a href="/tv/airing-today">Airing Today</a></li>
              </ul>
            </li>
            <li>
              <a href="/person">People</a>
              <ul class="sub_menu person hide" style="display: none;">
                <li><a href="/person">Popular People</a></li>
              </ul>
            </li>
          
        </ul>
          </b-col>
           <b-col cols="6"></b-col>
      </b-row>
    </b-container>
  </b-container> 
</template>
<script>
 import moment from 'moment'
export default {
  name: "headerMain"
};
</script>
<style scoped>
.headerFull.container-fluid {
  top: 0;
  left: 0;
  background-color: #081c24;
  width: 100%;
  z-index: 999;
  height: 158px;
  justify-content: center;
  align-items: center;
  display: flex;
}

ul.primary li {
    text-align: right;
    padding: 10px 0;
    margin-right: 25px;
}

ul.primary {
    display: flex;
    align-items: center;
    font-size: 1em;
    height: 72px;
    box-sizing: border-box;
    padding: 0;
}
ul.primary li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 600;
}
</style>