import { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { Loading } from '@components/Loading'
import { MealCard } from '@components/MealCard'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/MealStorageDTO'
import { saveStatistics } from '@storage/statistics/saveStatistics'
import { calcOverallStatistics } from '@utils/calcOverallStatistics'
import { Container, Text, Date, Content } from './styles'

interface MealGroup {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mealGroups, setMealGroups] = useState<MealGroup[]>([])
  const [statistics, setStatistics] = useState({
    onDiet: '',
    offDiet: ''
  })

  const { COLORS } = useTheme()
  const navigation = useNavigation()

  function handleOpenStatistics() {
    navigation.navigate('statistics')
  }

  function handleOpenNewMeal() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const storedMeals = await getMeals()

      const result = storedMeals.reduce((acc: MealGroup[], current) => {
        const foundIndex = acc.findIndex(item => item.title === current.date)

        if (foundIndex === -1) {
          return [
            ...acc,
            {
              title: current.date,
              data: [current]
            }
          ]
        }

        acc[foundIndex].data = [...acc[foundIndex].data, { ...current }]

        return acc
      }, [])

      setMealGroups(result)
    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar a lista')
    } finally {
      setIsLoading(false)
    }
  }

  async function calcAndSaveStatistics() {
    try {
      const storedMeals = await getMeals()

      const statisticsResults = calcOverallStatistics(storedMeals)

      await saveStatistics(statisticsResults)

      setStatistics(statisticsResults)
    } catch (error) {
      console.log(error)
      Alert.alert('Estatísticas', 'Não foi possível salvar as estatísticas')
    }
  }

  function handleShowMealDetails(id: string) {
    navigation.navigate('details', { id })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
      calcAndSaveStatistics()
    }, [])
  )

  return (
    <Container>
      <Header />

      <Content>
        <Percent
          title={
            statistics.onDiet >= '40%' ? statistics.onDiet : statistics.offDiet
          }
          subtitle={
            statistics.onDiet >= '40%'
              ? 'das refeições dentro da dieta.'
              : 'das refeições fora da dieta.'
          }
          type={statistics.onDiet >= '40%' ? 'PRIMARY' : 'SECONDARY'}
          onPress={handleOpenStatistics}
        />

        <Text>Refeições</Text>

        <Button
          title="Nova refeição"
          onPress={handleOpenNewMeal}
          style={{ marginBottom: 'auto' }}
        >
          <Plus size={18} color={COLORS.WHITE} weight="bold" />
        </Button>

        {isLoading ? (
          <Loading />
        ) : (
          <SectionList
            sections={mealGroups}
            renderSectionHeader={({ section }) => <Date>{section.title}</Date>}
            renderItem={({ item }) => (
              <MealCard
                hour={item.time}
                meal={item.name}
                status={item.onDiet ? 'PRIMARY' : 'SECONDARY'}
                onPress={() => handleShowMealDetails(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 90 }}
          />
        )}
      </Content>
    </Container>
  )
}
