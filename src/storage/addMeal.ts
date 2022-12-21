import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from './getMeals'
import { MealStorageDTO } from './MealStorageDTO'
import { MEAL_COLLECTION } from './storageConfig'

export async function addMeal(newMeal: MealStorageDTO, date: string) {
  try {
    const storedMeals = await getMeals()

    const storage = [...storedMeals, newMeal]

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}
