import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { sortBy } from 'lodash'
import { Header } from '@components/Header'
import { DataCard } from '@components/DataCard'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/MealStorageDTO'
import { calcOverallStatistics } from '@utils/calcOverallStatistics'
import {
  Container,
  Title,
  Subtitle,
  Content,
  ContentHeader,
  Overall
} from './styles'

export function Statistics() {
  const [data, setData] = useState({
    total: 0,
    mealsOnDiet: 0,
    mealsOffDiet: 0,
    overall: {
      onDiet: '',
      offDiet: ''
    }
  })
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const { total, mealsOnDiet, mealsOffDiet, overall } = data

  async function fetchOverallStatistics() {
    const storedMeals = await getMeals()

    const total = storedMeals.length
    const mealsOnDiet = storedMeals.filter(meal => meal.onDiet === true).length
    const mealsOffDiet = storedMeals.filter(
      meal => meal.onDiet === false
    ).length

    const overall = calcOverallStatistics(storedMeals)

    setData({
      total,
      mealsOnDiet,
      mealsOffDiet,
      overall
    })

    setMeals(storedMeals)
  }

  useFocusEffect(
    useCallback(() => {
      fetchOverallStatistics()
    }, [])
  )

  function calcSequenceOfMealsOnDiet() {
    const sortedByDate = sortBy(meals, 'date')

    const onDiet = true
    const threshold = 1
    let count = 0

    let numberInSeq = 0

    var sequenceFound = false

    sortedByDate.forEach(x => {
      if (x.onDiet === onDiet) {
        numberInSeq++
        if (numberInSeq >= threshold && sequenceFound === false) {
          count++
          sequenceFound = true
          numberInSeq = 0
        }
      } else {
        numberInSeq = 0
        sequenceFound = false
      }
    })

    return count
  }

  return (
    <Container type={overall.onDiet >= '40%' ? 'PRIMARY' : 'SECONDARY'}>
      <Header
        showBackButton
        type={overall.onDiet >= '40%' ? 'PRIMARY' : 'SECONDARY'}
      />

      <Title>
        {overall.onDiet >= '40%' ? overall.onDiet : overall.offDiet}
      </Title>
      <Subtitle>
        {overall.onDiet >= '40%'
          ? 'das refeições dentro da dieta.'
          : 'das refeições fora da dieta'}
      </Subtitle>

      <Content>
        <ContentHeader>Estatísticas gerais</ContentHeader>

        <DataCard
          title={calcSequenceOfMealsOnDiet().toString()}
          subtitle="melhor sequência de pratos dentro da dieta."
        />

        <DataCard title={`${total}`} subtitle="refeições registradas." />

        <Overall>
          <DataCard
            title={`${mealsOnDiet}`}
            subtitle="refeições dentro da dieta."
            variant="SUCCESS"
            style={{ width: '50%' }}
          />

          <DataCard
            title={`${mealsOffDiet}`}
            subtitle="refeições fora da dieta."
            variant="FAIL"
            style={{ width: '50%', marginLeft: 12 }}
          />
        </Overall>
      </Content>
    </Container>
  )
}
