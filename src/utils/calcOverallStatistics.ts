import { MealStorageDTO } from '@storage/MealStorageDTO'

export function calcOverallStatistics(storedMeals: MealStorageDTO[]) {
  const totalMeals = storedMeals.length
  const mealsOnDiet = storedMeals.filter(meal => meal.onDiet === true).length
  const mealsOffDiet = storedMeals.filter(meal => meal.onDiet === false).length

  const percentageOnDiet = `${((mealsOnDiet * 100) / totalMeals).toFixed(2)}%`
  const percentageOffDiet = `${((mealsOffDiet * 100) / totalMeals).toFixed(2)}%`

  return {
    onDiet: percentageOnDiet,
    offDiet: percentageOffDiet
  }
}
