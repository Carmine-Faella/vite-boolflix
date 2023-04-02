<script>
import {store} from '../store.js';

export default{
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
            <input type="text" placeholder="Search" v-model="store.search" @keyup.enter="$emit('doSearch')" class="col-4">
        </div>
    </div>
  
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
</style>