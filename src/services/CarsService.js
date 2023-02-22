import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class CarsService {

  async getCars() {
    const res = await api.get('auth/api/cars')
    logger.log('[get cars]', res.data)
    AppState.cars = res.data.map(c => new Car(c))
    logger.log(AppState.cars);
  }

  async createCar(carData) {
    const res = await api.post('auth/api/cars', carData)
    AppState.cars.push(new Car(res.data))
    return res.data
    // TODO something fancy with the router
  }

  async editCar(carData) {
    const res = await api.put('auth/api/cars/' + carData.id, carData)
    let i = AppState.cars.findIndex(c => c.id == carData.id)
    if (i == -1) {
      throw new Error('umm wat!?!')
    }
    AppState.cars.splice(i, 1, res.data)
  }

  async getCarById(carId) {
    AppState.car = null
    const res = await api.get('auth/api/cars/' + carId)
    AppState.car = res.data
  }

  async removeCar(carId) {
    const res = await api.delete('auth/api/cars/' + carId)
    let i = AppState.cars.findIndex(c => c.id == carId)
    if (i != -1) {
      AppState.cars.splice(i, 1)
    }
  }


}

export const carsService = new CarsService()
