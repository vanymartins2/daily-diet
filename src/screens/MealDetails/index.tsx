import { Tag } from '@components/Tag'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import {
  Container,
  Content,
  Text,
  DetailsStyleProps,
  Subtitle,
  Title
} from './styles'

interface MealDetails {
  type?: DetailsStyleProps
}

export function MealDetails({ type = 'PRIMARY' }: MealDetails) {
  const { COLORS } = useTheme()

  return (
    <Container type={type}>
      <Header title="Refeição" showBackButton hasTitle />

      <Content>
        <Title>Sanduíche</Title>

        <Text>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Text>

        <Subtitle>Data e hora</Subtitle>

        <Text>12/08/2022 às 16:00</Text>

        <Tag text="dentro da dieta" type="PRIMARY" />

        <Button title="Editar refeição">
          <PencilSimpleLine size={18} color={COLORS.WHITE} />
        </Button>

        <Button title="Excluir refeição" type="SECONDARY">
          <Trash size={18} />
        </Button>
      </Content>
    </Container>
  )
}
