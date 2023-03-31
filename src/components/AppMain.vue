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

    <div class="container">
        <div class="row">
            
                <h1>Film</h1>
                <div v-for="film,index in store.filmList" :key="index">
                    <AppCardFilm 
                    :filmTitle="film.original_title"
                    :title="film.title"
                    :languageFilm="film.original_language"
                    :vote="film.vote_average"
                    />
                </div>
    
        </div>
        <div class="row">
            
                <h1>Serie Tv</h1>
                <div v-for="series,index in store.seriesList" :key="index">
                    <AppCardSeries 
                    :seriesTitle="series.original_name"
                    :name="series.name"
                    :languageSeries="series.original_language"
                    :voteSeries="series.vote_average"
                    />
                </div>
        
        </div>
    </div>

</template>

<style scoped lang="scss">

</style>