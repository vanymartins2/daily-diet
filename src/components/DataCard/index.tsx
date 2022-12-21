import { ViewProps } from 'react-native'
import { DataCardStyleProps, Container, Subtitle, Title } from './styles'

interface DataCardProps extends ViewProps {
  title: string
  subtitle: string
  variant?: DataCardStyleProps
}

export function DataCard({
  title,
  subtitle,
  variant = 'STANDARD',
  ...rest
}: DataCardProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
