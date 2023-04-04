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
            <div>
                <input type="text" placeholder="Search" v-model="store.search" @keyup.enter="$emit('doSearch')">
                <select name="Categorie" v-model="store.change" @change="$emit('doChange')">
                    <option value="">Genere</option>
                    <option v-for="gen in store.genre" :value="gen.id">{{ gen.name }}</option>
                </select>
            </div>
        </div>
    </div>
  
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
img{
    width: 150px;
}
input, select{
    background: none;
    color: white;
    border: none;
    margin: 0 2rem;
    padding: 1rem;
}


</style>