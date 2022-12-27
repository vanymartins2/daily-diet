import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealStorageDTO } from '../MealStorageDTO'
import { MEAL_COLLECTION } from '../storageConfig'
import data from '../../utils/data.json'

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const defaultData = data

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : defaultData

    return meals
  } catch (error) {
    throw error
  }
}
