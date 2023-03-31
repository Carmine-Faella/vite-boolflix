<script>
import {store} from '../store.js';

export default{
  data(){
    return{
      store
    }
  },
  props:{
    seriesTitle:String,
    name:String,
    languageSeries:String,
    voteSeries:String
  }
}
</script>

<template>

    <div class="card-wrapper">
        <div v-if="languageSeries == 'en'"><img src="../assets/Flag-of-Great-Britain-01-1-150x150.png" alt="Flag of Britain"></div>
        <div v-else-if="languageSeries == 'it'"><img src="../assets/Flag-of-Italy-01-1-150x150.png" alt="Flag of Italy"></div>
        <div v-else>{{ languageSeries }}</div>
        <h5>{{ seriesTitle }}</h5>
        <h5>{{ name }}</h5>
        <h5>{{ languageSeries }}</h5>
        <h5>{{ voteSeries }}</h5>
    </div>
  
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *
</style>