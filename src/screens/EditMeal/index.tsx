import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { OptionButton } from '@components/OptionButton'
import { getMeals } from '@storage/meal/getMeals'
import { editMealById } from '@storage/meal/editMealById'
import {
  Container,
  DateTime,
  Form,
  Input,
  Label,
  Date,
  MaskedInput,
  Time,
  Options
} from './styles'

interface RouteParams {
  id: string
}

export function EditMeal() {
  const [data, setData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    onDiet: false
  })
  const [selected, setSelected] = useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  function handleSelected(value: string) {
    setSelected(value)

    value === 'no'
      ? setData({ ...data, onDiet: false })
      : setData({ ...data, onDiet: true })
  }

  async function handleSaveEditedMeal() {
    try {
      await editMealById(data, id)

      navigation.navigate('details', { id })
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Editar refeição',
        'Não foi possível salvar as novas informações.'
      )
    }
  }

  async function fetchMealData() {
    const meals = await getMeals()
    const editingMeal = meals.find(meal => meal.id === id)

    if (editingMeal) {
      setData({
        name: editingMeal?.name,
        description: editingMeal?.description,
        date: editingMeal?.date,
        time: editingMeal?.time,
        onDiet: editingMeal?.onDiet
      })

      editingMeal?.onDiet ? setSelected('yes') : setSelected('no')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealData()
    }, [])
  )

  return (
    <Container>
      <Header title="Editar refeição" showBackButton hasTitle />

      <Form>
        <Label>Nome</Label>
        <Input
          value={data.name}
          onChangeText={newName => setData({ ...data, name: newName })}
        />

        <Label>Descrição</Label>
        <Input
          multiline
          numberOfLines={5}
          style={{ textAlignVertical: 'top' }}
          value={data.description}
          onChangeText={newDescription =>
            setData({ ...data, description: newDescription })
          }
        />

        <DateTime>
          <Date>
            <Label>Data</Label>
            <MaskedInput
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              value={data.date}
              onChangeText={newDate => setData({ ...data, date: newDate })}
              keyboardType="numeric"
            />
          </Date>

          <Time>
            <Label>Hora</Label>
            <MaskedInput
              type={'datetime'}
              options={{
                format: 'HH:mm'
              }}
              value={data.time}
              onChangeText={newTime => setData({ ...data, time: newTime })}
              keyboardType="numeric"
            />
          </Time>
        </DateTime>

        <Label>Está dentro da dieta?</Label>

        <Options>
          <OptionButton
            label="Sim"
            type="PRIMARY"
            checked={selected === 'yes' ? true : false}
            onPress={() => handleSelected('yes')}
          />
          <OptionButton
            label="Não"
            checked={selected === 'no' ? true : false}
            onPress={() => handleSelected('no')}
            style={{ marginLeft: 8 }}
          />
        </Options>

        <Button
          title="Salvar alterações"
          onPress={handleSaveEditedMeal}
          style={{ marginTop: 'auto' }}
        />
      </Form>
    </Container>
  )
}
