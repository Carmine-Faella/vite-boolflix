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
      <h5>{{ filmTitle }}</h5>
      <h5>{{ title }}</h5>
      <div v-if="languageFilm == 'en'"><img src="../assets/Flag-of-Great-Britain-01-1-150x150.png" alt="Flag of Britain"></div>
      <div v-else-if="languageFilm == 'it'"><img src="../assets/Flag-of-Italy-01-1-150x150.png" alt="Flag of Italy"></div>
      <div v-else>{{ languageFilm }}</div>
      <h5>{{ Math.ceil(valutation*(5/10)) }}</h5>
      <p>{{ overview }}</p>
    </div>
  </div>
</div> 
             
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;


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