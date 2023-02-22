<template>
  <div class="carsPage">

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 p-3" v-for="c in cars">
          <CarCard :car="c" />
        </div>

      </div>
      <div class="row sticky-bottom" v-if="account.id">
        <div class="col-12 text-end">
          <button class="fs-5 btn btn-dark" data-bs-toggle="modal" data-bs-target="#test-modal">
            🚗
          </button>
        </div>
      </div>
    </div>





    <Modal id="test-modal" modal-title="Add a Car 🚗">
      <CarForm />
    </Modal>

  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getCars() {
      try {
        await carsService.getCars()
      } catch (error) {
        Pop.error(error, '[Getting Cars]')
      }
    }

    onMounted(() => {
      getCars()
    })

    return {
      account: computed(() => AppState.account),
      cars: computed(() => AppState.cars)
    }
  }
}
</script>


<style lang="scss" scoped></style>
