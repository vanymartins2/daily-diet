import { TouchableOpacityProps } from 'react-native'
import { Container, Status, Option, OptionButtonStyleProps } from './styles'

interface OptionButtonProps
  extends OptionButtonStyleProps,
    TouchableOpacityProps {
  label: string
  onPress: () => void
}

export function OptionButton({
  label,
  type = 'SECONDARY',
  checked,
  onPress,
  ...rest
}: OptionButtonProps) {
  return (
    <Container type={type} checked={checked} onPress={onPress} {...rest}>
      <Status type={type} />
      <Option>{label}</Option>
    </Container>
  )
}
