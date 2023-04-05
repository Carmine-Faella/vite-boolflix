<script>
import {store} from '../store.js';
import StarRating from './StarRating.vue';

export default{
  data(){
    return{
      store
    }
  },
  components:{
    StarRating
  },
  props:{
    imageSeries:String,
    seriesTitle:String,
    name:String,
    languageSeries:String,
    valutationTv:Number,
    overviewSeries:String
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
      <img :src="getImage(imageSeries)" :alt="seriesTitle">    
    </div>
    <div class="flip-card-back">
      <h5 v-if="seriesTitle == name">Titolo Originale:{{ seriesTitle }}</h5>
      <div v-else>
        <h5>Titolo Originale:{{ seriesTitle }}</h5>
        <h5>Titolo:{{ name }}</h5>
      </div>

        <div v-if="languageSeries == 'en'">Lingua Originale:<img src="../assets/Flag-of-Great-Britain-01-1-150x150.png" alt="Flag of Britain"></div>
        <div v-else-if="languageSeries == 'it'">Lingua Originale:<img src="../assets/Flag-of-Italy-01-1-150x150.png" alt="Flag of Italy"></div>
        <div v-else-if="languageSeries == 'fr'">Lingua Originale:<img src="../assets/Flag-of-France-01-1-150x150.png" alt="Flag of France"></div>
        <div v-else>Lingua Originale:{{ languageSeries }}</div>

      <StarRating :grade="Math.ceil(valutationTv/2)"/>
      
      <h6>Trama</h6>
      <p>{{ overviewSeries }}</p>
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