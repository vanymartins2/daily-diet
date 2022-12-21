import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type PercentStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: PercentStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 20px 16px;
  margin-bottom: 40px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
  flex: 1;
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
  text-align: center;
`
