import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'
import {
  Container,
  DateTime,
  Form,
  Input,
  Label,
  MaskedInput,
  Date,
  Options,
  Time
} from './styles'
import { AppError } from '@utils/AppError'
import uuid from 'react-native-uuid'
import { addMeal } from '@storage/addMeal'
import { getMeals } from '@storage/getMeals'
import { MealStorageDTO } from '@storage/MealStorageDTO'

interface Meal {
  id: string | number[]
  name: string
  description: string
  date: string
  time: string
  onDiet: boolean
}

export function NewMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [onDiet, setOnDiet] = useState(false)
  const [options, setOptions] = useState([
    {
      label: 'Sim',
      type: 'PRIMARY',
      checked: false
    },
    {
      label: 'Não',
      type: 'SECONDARY',
      checked: false
    }
  ])
  const [data, setData] = useState([])

  const navigation = useNavigation()

  function handleCheck(label: string) {
    label === 'Sim' ? setOnDiet(true) : onDiet

    setOptions(prevState =>
      prevState.map(option => {
        if (option.label === label) {
          return {
            ...option,
            checked: !option.checked
          }
        }
        return {
          ...option,
          checked: false
        }
      })
    )
  }

  async function handleNew() {
    try {
      if (date.trim().length === 0) {
        return Alert.alert(
          'Nova refeição',
          'Insira a data em que a refeição foi consumida.'
        )
      }

      const newMeal = {
        id: uuid.v4(),
        name,
        description,
        date,
        time,
        onDiet
      }

      await addMeal(newMeal, date)

      navigation.navigate('feedback', { onDiet })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova turma', error.message)
      } else {
        Alert.alert('Nova turma', 'Não foi possível criar uma nova turma.')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" showBackButton hasTitle />

      <Form>
        <Label>Nome</Label>
        <Input onChangeText={setName} />

        <Label>Descrição</Label>
        <Input
          multiline
          numberOfLines={5}
          style={{ textAlignVertical: 'top' }}
          onChangeText={setDescription}
        />

        <DateTime>
          <Date>
            <Label>Data</Label>
            <MaskedInput
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              value={date}
              onChangeText={setDate}
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
              value={time}
              onChangeText={setTime}
              keyboardType="numeric"
            />
          </Time>
        </DateTime>

        <Label>Está dentro da dieta?</Label>

        <Options>
          {options.map(option => (
            <Checkbox
              key={option.label}
              label={option.label}
              type={option.type}
              checked={option.checked}
              onValueChange={() => handleCheck(option.label)}
            />
          ))}
        </Options>

        <Button
          title="Cadastrar refeição"
          style={{ marginTop: 'auto' }}
          onPress={handleNew}
        />
      </Form>
    </Container>
  )
}
