<template>
<b-container fluid class="footer">
    <b-container>
        <b-row>
            <b-col cols="3">
                <div>
          <h3>The Basics</h3>
          <ul>
            <li><a href="/about">About TMDb</a></li>
            <li><a href="/about/staying-in-touch">Contact Us</a></li>
            <li><a href="/talk">Support Forums</a></li>
            <li><a href="/documentation/api">API</a></li>
            <li><a href="https://blog.themoviedb.org/" target="_blank" rel="noopener">Blog</a></li>
          </ul>
        </div>
            </b-col>
             <b-col cols="3">
               <div>
          <h3>Get Involved</h3>
          <ul>
            <li><a href="/bible"><span class="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
            <li><a href="/apps">3rd Party Applications</a></li>
            <li><a href="/movie/new">Add New Movie</a></li>
            <li><a href="/tv/new">Add New TV Show</a></li>
          </ul>
        </div>
             </b-col>
              <b-col cols="3">
                <div>
          <h3>Community</h3>
          <ul>
            <li><a href="/documentation/community/guidelines">Guidelines</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="/discuss">Forums</a></li>
            <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </div>
              </b-col>
               <b-col cols="3">
                <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
               </b-col>
        </b-row>
    </b-container>
</b-container>
</template>

<script>
export default {
  name: "footer"
};
</script>
<style>
.footer.container-fluid {
  background-image: url(https://www.themoviedb.org/assets/1/v4/footers_v2/Scream-4c01419d42f538dcdf5640840a04cd48ce290385a4436b17c743133fb74abe30.jpg),
    radial-gradient(at 30% top, #074034 0%, #081c24 70%);
  height: 450px;
  box-sizing: border-box;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.footer h3 {
    font-weight: bold;
    font-size: 1.4em;
    line-height: 1.4em;
    text-transform: uppercase;
    color: #fff;
    white-space: nowrap;
}

.footer ul li a {
    font-size: 1.2em;
    color: #fff;
}

.footer ul li {
    line-height: 1.6em;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
}

.footer ul {
    padding-left: 0;
}
</style>