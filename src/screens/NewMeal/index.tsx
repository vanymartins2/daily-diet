import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { OptionButton } from '@components/OptionButton'

import { addMeal } from '@storage/addMeal'
import { AppError } from '@utils/AppError'
import uuid from 'react-native-uuid'
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

export function NewMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [onDiet, setOnDiet] = useState(false)
  const [selected, setSelected] = useState('')

  const navigation = useNavigation()

  function handleSelected(value: string) {
    setSelected(value)

    value === 'yes' ? setOnDiet(true) : setOnDiet(false)
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
          />
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
