<template>
  <div class="housesPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 p-3" v-for="h in houses">
          <HouseCard :house="h"/>
        </div>
      </div>
      <div class="row sticky-bottom" v-if="account.id">
        <div class="col-12 text-end">
          <button class="fs-5 btn btn-dark" data-bs-toggle="modal" data-bs-target="#house-modal">🏡</button>
        </div>
      </div>
    </div>


  <Modal id="house-modal" modal-title="Add a House 🏡">
    <HouseForm/>
  </Modal>


  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js"
import Pop from "../utils/Pop.js";

export default {
  setup(){

async function getHouses(){
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.error(error, 'GETTING HOUSES')
  }
}

onMounted(() => {
  getHouses()
})

    return {
      account: computed(() => AppState.account),
      houses: computed(() => AppState.houses),
      house: computed(() => AppState.house)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
