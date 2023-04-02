<script>
import {store} from '../store.js';

export default{
  data(){
    return{
      store
    }
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
      <h5>{{ seriesTitle }}</h5>
      <h5>{{ name }}</h5>
      <div v-if="languageSeries == 'en'"><img src="../assets/Flag-of-Great-Britain-01-1-150x150.png" alt="Flag of Britain"></div>
      <div v-else-if="languageSeries == 'it'"><img src="../assets/Flag-of-Italy-01-1-150x150.png" alt="Flag of Italy"></div>
      <div v-else>{{ languageSeries }}</div>
      <h5>{{ Math.ceil(valutation*(5/10)) }}</h5>
      <p>{{ overviewSeries }}</p>
    </div>
  </div>
</div> 
  
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;


</style>