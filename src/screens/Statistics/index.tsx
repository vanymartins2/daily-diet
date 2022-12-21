import { DataCard } from '@components/DataCard'
import { Header } from '@components/Header'
import {
  Container,
  HeaderStyleProps,
  Title,
  Subtitle,
  Content,
  ContentHeader,
  Overall
} from './styles'

interface StatisticsProps {
  type?: HeaderStyleProps
}

export function Statistics({ type = 'PRIMARY' }: StatisticsProps) {
  return (
    <Container type={type}>
      <Header showBackButton type={type} />

      <Title>90,87%</Title>
      <Subtitle>das refeições dentro da dieta.</Subtitle>

      <Content>
        <ContentHeader>Estatísticas gerais</ContentHeader>

        <DataCard
          title="4"
          subtitle="melhor sequência de pratos dentro da dieta."
        />

        <DataCard title="109" subtitle="refeições registradas." />

        <Overall>
          <DataCard
            title="32"
            subtitle="refeições dentro da dieta."
            variant="SUCCESS"
            style={{ width: '50%' }}
          />

          <DataCard
            title="77"
            subtitle="refeições fora da dieta."
            variant="FAIL"
            style={{ width: '50%', marginLeft: 12 }}
          />
        </Overall>
      </Content>
    </Container>
  )
}
