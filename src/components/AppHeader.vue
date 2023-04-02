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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo Netflix">
            <input type="text" placeholder="Search" v-model="store.search" @keyup.enter="$emit('doSearch')" class="col-4">
        </div>
    </div>
  
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;

img{
    width: 150px;
}

</style>