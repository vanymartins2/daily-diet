import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Alert, SectionList } from 'react-native'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { Loading } from '@components/Loading'
import { MealCard } from '@components/MealCard'
import { useTheme } from 'styled-components'
import { Plus } from 'phosphor-react-native'
import { Container, Text, Date, Content } from './styles'
import { getMeals } from '@storage/getMeals'
import { MealStorageDTO } from '@storage/MealStorageDTO'

interface MealGroup {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mealGroups, setMealGroups] = useState<MealGroup[]>([])

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
      Alert.alert('Turmas', 'Não foi possível carregar a lista')
    } finally {
      setIsLoading(false)
    }
  }

  function handleShowMealDetails(id: string | number[]) {
    navigation.navigate('details', { id })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  console.log(mealGroups)

  return (
    <Container>
      <Header />

      <Content>
        <Percent
          title="90,87%"
          subtitle="das refeições dentro da dieta."
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
        />
      </Content>
    </Container>
  )
}
