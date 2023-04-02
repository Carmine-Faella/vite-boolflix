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
        <h1 v-if='this.store.filmList.length > 0'>Film</h1>
        <div class="row">
                <div v-for="film,index in store.filmList" :key="index">
                    <AppCardFilm 
                    :imageFilm="film.poster_path"
                    :filmTitle="film.original_title"
                    :title="film.title"
                    :languageFilm="film.original_language"
                    :valutation="film.vote_average"
                    :overview="film.overview"
                    />
                </div>
        </div>
        <h1 v-if='this.store.filmList.length > 0'>Serie Tv</h1>
        <div class="row">
                <div v-for="series,index in store.seriesList" :key="index">
                    <AppCardSeries 
                    :imageSeries="series.poster_path"
                    :seriesTitle="series.original_name"
                    :name="series.name"
                    :languageSeries="series.original_language"
                    :valutationTv="series.vote_average"
                    :overviewSeries="series.overview"
                    />
                </div>
        </div>
    </div>
   
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;

</style>