import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatisticsStorageDTO } from './StatisticsStorageDTO'
import { STATISTICS_COLLECTION } from '../storageConfig'

export async function saveStatistics(statistics: StatisticsStorageDTO) {
  try {
    const storage = JSON.stringify(statistics)

    await AsyncStorage.setItem(STATISTICS_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
