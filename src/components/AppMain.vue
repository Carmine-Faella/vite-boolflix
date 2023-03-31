<script>
import {store} from '../store.js';
import AppCardFilm from './AppCardFilm.vue';
import AppCardSeries from './AppCardSeries.vue';

export default{
    components:{
        AppCardFilm,
        AppCardSeries
    },
    data(){
        return{
        store
        }
    }
}
</script>

<template>
    <div>
        <h1>Film</h1>
        <div v-for="film,index in store.filmList" :key="index">
            <AppCardFilm :film-title="film.original_title"/>
        </div>
    </div>
    <div>
        <h1>Serie Tv</h1>
        <div v-for="series,index in store.seriesList" :key="index">
            <AppCardFilm :seriesTitle="series.original_name"/>
        </div>
    </div>
  
</template>

<style scoped lang="scss">
</style>