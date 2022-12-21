import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { BackButton } from '@components/BackButton'
import { Avatar, Container, HeaderStyleProps, Logo, Title } from './styles'
import logoImg from '@assets/logo.png'

interface HeaderProps extends HeaderStyleProps {
  title?: string
  showBackButton?: boolean
  type?: 'PRIMARY' | 'SECONDARY'
}

export function Header({
  showBackButton = false,
  hasTitle = false,
  type,
  title
}: HeaderProps) {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container hasTitle={hasTitle}>
      {showBackButton ? (
        <BackButton
          size={24}
          color={
            type === 'PRIMARY'
              ? COLORS.GREEN_DARK
              : type === 'SECONDARY'
              ? COLORS.RED_DARK
              : COLORS.GRAY_600
          }
          onPress={handleGoBack}
        />
      ) : (
        <>
          <Logo source={logoImg} />
          <Avatar />
        </>
      )}

      {hasTitle ? <Title>{title}</Title> : null}
    </Container>
  )
}
