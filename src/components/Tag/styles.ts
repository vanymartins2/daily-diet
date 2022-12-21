import styled, { css } from 'styled-components/native'

export type TagStatusProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: TagStatusProps
}

export const Container = styled.View`
  width: 144px;
  height: 34px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 1000px;
  margin-bottom: auto;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  line-height: 18px;
`

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 1000px;
`
