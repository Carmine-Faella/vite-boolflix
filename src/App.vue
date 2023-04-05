<script>
import axios from 'axios';
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default{
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getFilm(){
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&language=it-IT`;
      let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&language=it-IT`;     

      if(store.search.length > 0){
        url+=`&query=${store.search}`;
        urlSeries += `&query=${store.search}`;
      };
      axios.get(url)
      .then(response=>{
        this.store.filmList = response.data.results;

        for(let i = 0; i<this.store.filmList.length; i++){
          axios.get(`https://api.themoviedb.org/3/movie/${store.filmList[i].id}/credits?api_key=${store.apiKey}`)
          .then(response=>{
            this.store.cast = response.data.cast;
            this.store.filmList[i].cast = this.store.cast
          })    
        }
      });

      axios.get(urlSeries)
      .then(response=>{
        this.store.seriesList = response.data.results;
      });

      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${store.apiKey}&language=it-IT&query`)
      .then(response=>{
        this.store.genre = response.data.genres;
      });

      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${store.apiKey}&language=it-IT&query`)
      .then(response=>{
        this.store.genreTv = response.data.genres;
      });

      store.search=''
    },
    getChange(){

      if(store.change){
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${store.apiKey}&with_genres=${store.change}`)
        .then(response=>{
          this.store.filmList = response.data.results;
        });
      };
      if(store.changeTv){
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${store.apiKey}&with_genres=${store.changeTv}`)
        .then(response=>{
          this.store.seriesList = response.data.results;
        });

      axios.get(`https://api.themoviedb.org/3/movie/550/credits?api_key=${store.apiKey}`)
      .then(response=>{
        this.store.cast = response.data.cast;
      });
      }
      
      store.change='';
      store.changeTv=''
    }
  },
  created(){
    this.getFilm();
  }
}
</script>

<template>

  <header>
    <AppHeader 
    @doSearch="getFilm"
    @doChange = 'getChange'
    />
  </header>

  <main>
    <AppMain/>
  </main>
  
</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;
</style>