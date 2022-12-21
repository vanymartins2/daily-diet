import { TouchableOpacityProps } from 'react-native'
import {
  StatusStyleProps,
  Container,
  Divider,
  Hour,
  Meal,
  Status
} from './styles'

interface MealCardProps extends TouchableOpacityProps {
  hour: string
  meal: string
  status?: StatusStyleProps
}

export function MealCard({
  hour,
  meal,
  status = 'PRIMARY',
  ...rest
}: MealCardProps) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>

      <Divider />

      <Meal>{meal}</Meal>

      <Status status={status} />
    </Container>
  )
}
