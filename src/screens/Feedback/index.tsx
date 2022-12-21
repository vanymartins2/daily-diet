import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'
import { FeedbackMessage } from '@components/FeedbackMessage'
import { Container } from './styles'

interface RouteParams {
  onDiet: boolean
}

export function Feedback() {
  const route = useRoute()
  const { onDiet } = route.params as RouteParams

  const navigation = useNavigation()

  function goToHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <FeedbackMessage feedback={onDiet ? 'SUCCESS' : 'FAILURE'} />

      <Button title="Ir para a página inicial" onPress={goToHome} />
    </Container>
  )
}
