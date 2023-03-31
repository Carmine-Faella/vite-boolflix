<script>
import {store} from '../store.js';

export default{
  data(){
    return{
      store
    }
  },
  props:{
    title:String
  }
}
</script>

<template>

    <div>
        <h3>{{ title }}</h3>
    </div>
  
</template>

<style scoped lang="scss">
</style>