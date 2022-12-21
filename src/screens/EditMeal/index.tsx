import { useState } from 'react'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'
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

export function EditMeal() {
  const [options, setOptions] = useState([
    {
      label: 'Sim',
      type: 'PRIMARY',
      checked: false,
      disabled: false
    },
    {
      label: 'Não',
      type: 'SECONDARY',
      checked: false,
      disabled: false
    }
  ])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function handleCheck(label: string) {
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

  return (
    <Container>
      <Header title="Editar refeição" showBackButton hasTitle />

      <Form>
        <Label>Nome</Label>
        <Input />

        <Label>Descrição</Label>
        <Input
          multiline
          numberOfLines={5}
          style={{ textAlignVertical: 'top' }}
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

        <Button title="Salvar alterações" style={{ marginTop: 'auto' }} />
      </Form>
    </Container>
  )
}
