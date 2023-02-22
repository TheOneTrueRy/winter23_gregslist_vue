<template>
  <div class="CarCard card h-100">
    <router-link :to="{ name: 'Car', params: { carId: car.id } }">
      <img class="rounded-top img-fluid w-100 cardImg" :src="car.imgUrl" :alt="car.make + ' ' + car.model">
    </router-link>

    <div class="card-body">
      <p><b>{{ car.make }} {{ car.model }} - ${{ car.price }}</b></p>
    </div>
    <div class="card-footer text-end" v-if="showSeller">
      <span class="on-hover me-2">{{ car.seller.name }}</span>
      <img :src="car.seller.picture" :alt="car.seller.name" :title="car.seller.name" height="40" width="40"
        class="rounded-circle">
    </div>
  </div>
</template>


<script>
import { Car } from "../models/Car.js";

export default {
  props: {
    car: { type: Car, required: true },
    showSeller: { type: Boolean, default: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
