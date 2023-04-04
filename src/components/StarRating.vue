
<template>
    <div class="rating">
        <ul class="list">
            <li :key="star" v-for="star in maxStars"  class="star">
                <i scale="2" :class="star <= stars ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
            </li>
        </ul>
    </div>
</template>
  
<script>

import {store} from '../store.js';

export default {
  data(){
    return{
        store
    }
  },
  props: {
    grade: {
      type: Number,
      required: true
    },
    maxStars: {
      type: Number,
      default: 5
    },
    hasCounter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      stars: this.grade
    }
  },
  methods: {
    rate(star) {
      if (
        typeof star === 'number' &&
        star <= this.maxStars &&
        star >= 0
      )
        this.stars = this.stars === star ? star - 1 : star
    }
  }
}
</script>
  <style scoped lang="scss">
  
   ul{

    display: inline-block;
    padding: 0;

        li{
        display: inline;
        }
   }
  </style>