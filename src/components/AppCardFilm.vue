<script>
import {store} from '../store.js';

export default{
  data(){
    return{
      store
    }
  },
  props:{
    filmTitle:String,
    title:String,
    languageFilm:String,
    vote:String

  }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-3">
                <div v-if="languageFilm == 'en'"><img src="../assets/Flag-of-Great-Britain-01-1-150x150.png" alt="Flag of Britain"></div>
                <div v-else-if="languageFilm == 'it'"><img src="../assets/Flag-of-Italy-01-1-150x150.png" alt="Flag of Italy"></div>
                <div v-else>{{ languageFilm }}</div>
                <h5>{{ filmTitle }}</h5>
                <h5>{{ title }}</h5>
                <h5>{{ vote }}</h5>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *

</style>