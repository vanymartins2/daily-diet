export interface MealStorageDTO {
  id: string
  name: string
  description: string
  date: string
  time: string
  onDiet: boolean
}

export interface EditMealDataDTO {
  name: string
  description: string
  date: string
  time: string
  onDiet: boolean
}
