import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${({ theme, type }) =>
    type === 'PRIMARY'
      ? css`
          background-color: ${theme.COLORS.GRAY_600};
        `
      : css`
          border: 1px solid ${theme.COLORS.GRAY_700};
          background-color: transparent;
          margin-top: 8px;
        `}
`

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};

  margin-left: 12px;
`
