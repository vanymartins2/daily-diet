import { TouchableOpacityProps } from 'react-native'
import { ButtonStyleProps, Container, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  children?: JSX.Element
  title: string
  type?: ButtonStyleProps
}

export function Button({
  children,
  title,
  type = 'PRIMARY',
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {children}

      <Title type={type}>{title}</Title>
    </Container>
  )
}
