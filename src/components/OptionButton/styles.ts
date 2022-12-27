import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type OptionButtonStyleProps = {
  type?: string
  checked?: boolean
}

export const Container = styled(TouchableOpacity)<OptionButtonStyleProps>`
  flex: 1;
  flex-direction: row;
  height: 50px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  ${({ theme, type, checked }) =>
    type === 'PRIMARY' && checked
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
          border: 1px solid ${theme.COLORS.GREEN_DARK};
        `
      : type === 'SECONDARY' && checked
      ? css`
          background-color: ${theme.COLORS.RED_LIGHT};
          border: 1px solid ${theme.COLORS.RED_DARK};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_200};
          border: 1px solid ${theme.COLORS.GRAY_200};
        `}
`

export const Status = styled.View<OptionButtonStyleProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Option = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  line-height: 18px;
`
