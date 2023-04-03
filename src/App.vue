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
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=b12dac9a65df8782bbd74dadfa3c5f7b&language=it-IT';
      let urlSeries = 'https://api.themoviedb.org/3/search/tv?api_key=b12dac9a65df8782bbd74dadfa3c5f7b&language=it-IT';     
      let urlGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b12dac9a65df8782bbd74dadfa3c5f7b&language=it&query';

      if(store.search.length > 0){
        url+=`&query=${store.search}`;
        urlSeries += `&query=${store.search}`;
      };

      if(store.change == store.filmList.genre_ids){
        url+=`&query=${store.search}`;
      }

      axios.get(url)
      .then(response=>{
        this.store.filmList = response.data.results;
      });

      axios.get(urlSeries)
      .then(response=>{
        this.store.seriesList = response.data.results;
      });

      axios.get(urlGenre)
      .then(response=>{
        this.store.genre = response.data.genres;
      });

      store.search=''
    },
    getGenre(){
      if(store.change == store.filmList){
        store.filmList.forEach(element => {
          console.log(element.genre_ids[0])
        })
      }
    }
  },
  created(){
    this.getFilm();
    this.getGenre();
  }
}


</script>

<template>

  <header>
    <AppHeader 
    @doSearch="getFilm"
    @doChange="getGenre"
    />
  </header>

  <main>
    <AppMain/>
  </main>
  
</template>

<style scoped lang="scss">
@use './styles/general.scss' as *;

</style>