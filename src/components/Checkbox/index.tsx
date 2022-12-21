import { TouchableOpacityProps } from 'react-native'
import { OptionButtonStyleProps, Container, Option, Status } from './styles'

interface CheckboxProps extends TouchableOpacityProps, OptionButtonStyleProps {
  label: string
  onValueChange: () => void
}

export function Checkbox({
  label,
  type,
  checked,
  onValueChange,
  ...rest
}: CheckboxProps) {
  return (
    <Container type={type} checked={checked} onPress={onValueChange} {...rest}>
      <Status type={type} />
      <Option>{label}</Option>
    </Container>
  )
}
