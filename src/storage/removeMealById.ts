import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from './getMeals'
import { MEAL_COLLECTION } from './storageConfig'

export async function removeMealById(id: string | number[]) {
  try {
    const storedMeals = await getMeals()

    const filteredMeals = storedMeals.filter(meal => meal.id !== id)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals))
  } catch (error) {
    throw error
  }
}
