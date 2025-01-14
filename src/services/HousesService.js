import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService{
  async getHouses(){
    const res = await api.get('auth/api/houses')
    AppState.houses = res.data.map(h => new House(h))
    logger.log('Get Houses', AppState.houses)
  }

  async createHouse(houseData){
    const res = await api.post('auth/api/houses', houseData)
    AppState.houses.push(new House(res.data))
    return res.data
  }

  async editHouse(houseData){
    const res = await api.put('auth/api/houses' + houseData.id, houseData)
    let i = AppState.houses.findIndex(h => h.id == houseData.id)
    AppState.houses.splice(i, 1, new House(res.data))
  }

  async deleteHouse(houseId){
    const res = await api.delete('auth/api/houses' + houseId)
    let i = AppState.houses.findIndex(h => h.id == houseId)
    if(i != -1){
      AppState.houses.splice(i, 1)
    }
  }

  async getHouseById(houseId){
    AppState.house = null
    const res = await api.get('auth/api/houses/' + houseId)
    AppState.house = res.data
  }
}

export const housesService = new HousesService()