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

    <div>
        <input type="text" placeholder="Search" v-model="store.search">
        <button @click="$emit('doSearch')">Cerca</button>
    </div>
  
</template>

<style scoped lang="scss">
</style>