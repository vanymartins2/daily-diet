import styled, { css } from 'styled-components/native'

export type DataCardStyleProps = 'SUCCESS' | 'FAIL' | 'STANDARD'

type Props = {
  variant: DataCardStyleProps
}

export const Container = styled.View<Props>`
  min-height: 90px;
  padding: 16px;
  margin-bottom: 12px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background-color: ${({ theme, variant }) =>
    variant === 'SUCCESS'
      ? theme.COLORS.GREEN_LIGHT
      : variant === 'FAIL'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 8px;
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  text-align: center;
`
