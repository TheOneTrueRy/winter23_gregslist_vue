<template>
<div class="card h-100">
  <router-link :to="{name: 'House', params: { houseId: house.id}}">
  <img class="rounded-top img-fluid w-100 cardImg" :src="house.imgUrl">
  </router-link>
  <div class="card-body">
    <p><b>{{ house.bedrooms }} bedrooms - {{ house.bathrooms }} bathrooms - ${{ house.price }} </b></p>
  </div>
</div>
</template>


<script>
import { House } from "../models/House.js";

export default {
  props: {
    house: {type: House, required: true},
    showSeller: {type: Boolean, default: true}
  },
  setup(){

    return {

    }
  }
}
</script>


<style lang="scss" scoped>

</style>