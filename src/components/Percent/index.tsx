import { TouchableOpacityProps, View } from 'react-native'
import { useTheme } from 'styled-components'
import { ArrowUpRight } from 'phosphor-react-native'
import { PercentStyleProps, Container, Subtitle, Title } from './styles'

interface PercentProps extends TouchableOpacityProps {
  title: string
  subtitle: string
  type?: PercentStyleProps
}

export function Percent({
  title,
  subtitle,
  type = 'PRIMARY',
  ...rest
}: PercentProps) {
  const { COLORS } = useTheme()

  return (
    <Container type={type} {...rest}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Title>{title}</Title>

        <ArrowUpRight
          size={24}
          color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
        />
      </View>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
