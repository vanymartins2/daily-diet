import styled, { css } from 'styled-components/native'
import { UserCircle } from 'phosphor-react-native'

export type HeaderStyleProps = {
  hasTitle?: boolean
}

export const Container = styled.View<HeaderStyleProps>`
  ${({ hasTitle }) =>
    !hasTitle &&
    css`
      justify-content: space-between;
      padding: 24px;
    `};

  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`
export const Avatar = styled(UserCircle).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_600
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  flex: 1;
  text-align: center;
`
