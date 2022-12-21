import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealStorageDTO } from './MealStorageDTO'
import { MEAL_COLLECTION } from './storageConfig'

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
