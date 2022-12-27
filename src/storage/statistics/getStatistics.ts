import AsyncStorage from '@react-native-async-storage/async-storage'
import { STATISTICS_COLLECTION } from '@storage/storageConfig'

export async function getStatistics() {
  try {
    const storedStatistics = await AsyncStorage.getItem(STATISTICS_COLLECTION)

    const defaultData = { onDiet: '0,00%', offDiet: '0,00%' }

    const storage = !storedStatistics
      ? defaultData
      : JSON.parse(storedStatistics)

    return storage
  } catch (error) {
    throw error
  }
}
