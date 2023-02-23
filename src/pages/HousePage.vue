<template>
  <div class="HousePage" v-if="house">
    <div class="container">
      <div class="row my-3">
        <div class="col-md-8 m-auto">
          <HouseCard :house="house" :showSeller="false"/>
          <div class="card my-2">
            <div class="card-body">
              <p>
                {{ house.description }}
              </p>
              <div>
                <ul>
                  <li>
                    Year: {{ house.year }}
                  </li>
                  <li>
                    Floors: {{ house.levels }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div>
                <button @click="deleteHouse()" v-if="account.id == house.seller.id" class="btn btn-danger">Remove Listing</button>
              </div>
              <div>
                <span class="me-2">{{ house.seller.name }}</span>
                <img :src="house.seller.picture" :alt="house.seller.name" height="64" width="64">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Loading.... <i class="mdi mdi-pinwheel mdi-spin"></i></h1>
  </div>
</template>


<script>
import { onMounted, computed } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState.js"
import { router } from "../router.js"
import { housesService } from "../services/HousesService.js"
import Pop from "../utils/Pop.js"

export default {
  setup(){
    const route = useRoute()
    const houseId = route.params.houseId

    async function getHouseById(){
      try {
        await housesService.getHouseById(houseId)
      } catch (error) {
        Pop.error(error, 'Getting House by Id')
      }
    }

    onMounted(() => {
      getHouseById()
    })

    return {
      houseId,
      account: computed(() => AppState.account),
      house: computed(() => AppState.house),
      async deleteHouse(){
        try {
          await housesService.deleteHouse(houseId)
          router.push({name: "Houses"})
        } catch (error) {
          Pop.error(error, 'Deleting House')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>