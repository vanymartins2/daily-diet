import AsyncStorage from '@react-native-async-storage/async-storage'
import { EditMealDataDTO, MealStorageDTO } from '@storage/MealStorageDTO'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { getMeals } from './getMeals'

export async function editMealById(editedMeal: EditMealDataDTO, id: string) {
  try {
    const storedMeals = await getMeals()

    const newData = storedMeals.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          name: editedMeal.name,
          description: editedMeal.description,
          date: editedMeal.date,
          time: editedMeal.time,
          onDiet: editedMeal.onDiet
        }
      }

      return obj
    })

    // const storage = [...storedMeals, updatedMeal]

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newData))
  } catch (error) {
    throw error
  }
}
