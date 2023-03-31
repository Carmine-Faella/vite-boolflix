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
  }
}
</script>

<template>

    <div>
        <h3>{{ seriesTitle }}</h3>
    </div>
  
</template>

<style scoped lang="scss">
</style>