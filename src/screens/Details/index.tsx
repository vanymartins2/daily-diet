import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Tag } from '@components/Tag'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/MealStorageDTO'
import { removeMealById } from '@storage/meal/removeMealById'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { Container, Content, Text, Subtitle, Title } from './styles'

interface RouteParams {
  id: string
}

export function Details() {
  const [selectedMeal, setSelectedMeal] = useState<MealStorageDTO>()
  const [isLoading, setIsLoading] = useState(true)

  const { COLORS } = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchMealDetails() {
    try {
      setIsLoading(true)

      const meals = await getMeals()
      const foundMeal = meals.find(meal => meal.id === id)

      setSelectedMeal(foundMeal)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Detalhes',
        'Não foi possível encontrar os detalhes desta refeição.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  async function removeMeal() {
    try {
      await removeMealById(id)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover refeição', 'Não foi possível remover a refeição.')
    }
  }

  async function handleRemoveMeal() {
    Alert.alert('Remover refeição', 'Deseja remover a refeição?', [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: () => removeMeal()
      }
    ])
  }

  function handleOpenEditMeal() {
    navigation.navigate('edit', { id })
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealDetails()
    }, [])
  )

  return (
    <Container type={selectedMeal?.onDiet ? 'PRIMARY' : 'SECONDARY'}>
      <Header title="Refeição" showBackButton hasTitle />

      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Title>{selectedMeal?.name}</Title>

            <Text>{selectedMeal?.description}</Text>

            <Subtitle>Data e hora</Subtitle>

            <Text>
              {selectedMeal?.date} às {selectedMeal?.time}
            </Text>

            <Tag
              text={selectedMeal?.onDiet ? 'dentro da dieta' : 'fora da dieta'}
              type={selectedMeal?.onDiet ? 'PRIMARY' : 'SECONDARY'}
            />

            <Button title="Editar refeição" onPress={handleOpenEditMeal}>
              <PencilSimpleLine size={18} color={COLORS.WHITE} />
            </Button>

            <Button
              title="Excluir refeição"
              type="SECONDARY"
              onPress={handleRemoveMeal}
            >
              <Trash size={18} />
            </Button>
          </>
        )}
      </Content>
    </Container>
  )
}
