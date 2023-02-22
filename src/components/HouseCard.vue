<template>
<div class="card h-100">
  <router-link :to="{name: 'House', params: { houseId: house.id}}">
  <img class="rounded-top img-fluid w-100 cardImg" :src="house.imgUrl">
  </router-link>
  <div class="card-body">
    <p><b>{{ house.bedrooms }} bedrooms - {{ house.bathrooms }} bathrooms - ${{ house.price }} </b></p>
  </div>
  <div class="card-footer text-end">
    <span class="on-hover me-2">{{ house.seller.name }}</span>
    <img :src="house.seller.picture" :alt="house.seller.name" height="40" width="40" class="rounded-circle">
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