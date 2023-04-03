<script>
import {store} from '../store.js';

export default{
  data(){
    return{
      store
    }
  },
  props:{
    imageFilm:String,
    filmTitle:String,
    title:String,
    languageFilm:String,
    valutation:Number,
    overview:String
  },
  methods:{
    getImage(img){
      return new URL(`https://image.tmdb.org/t/p/w342/${img}`)
    }
  }
}
</script>

<template>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img :src="getImage(imageFilm)" :alt="title">
    </div>
    <div class="flip-card-back">
      <h5 v-if="filmTitle == title">Titolo Originale:{{ filmTitle }}</h5>
      <div v-else>
        <h5>Titolo Originale:{{ filmTitle }}</h5>
        <h5>Titolo:{{ title }}</h5>
      </div>
      <div v-if="languageFilm == 'en'">Lingua Originale:<img src="../assets/Flag-of-Great-Britain-01-1-150x150.png" alt="Flag of Britain"></div>
      <div v-else-if="languageFilm == 'it'">Lingua Originale:<img src="../assets/Flag-of-Italy-01-1-150x150.png" alt="Flag of Italy"></div>
      <div v-else-if="languageFilm == 'fr'">Lingua Originale:<img src="../assets/Flag-of-France-01-1-150x150.png" alt="Flag of France"></div>
      <div v-else>Lingua Originale:{{ languageFilm }}</div>
      <h5>Voto:{{ Math.ceil(valutation*(5/10)) }}</h5>
      <h6>Trama</h6>
      <p>{{ overview }}</p> 
    </div>
  </div>
</div>         
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;

h5, h6{
  padding: 10px 0;
}


</style>

<!--<div class="star-rating" data-rating="4.6">
        <div class="empty-stars">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>                     
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="full-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>                      
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
    </div>-->  