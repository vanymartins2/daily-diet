import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StatusStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  status: StatusStyleProps
}

export const Container = styled(TouchableOpacity)`
  box-sizing: border-box;
  height: 49px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  margin: 5px 0;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SSM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  line-height: 16px;
`

export const Divider = styled.View`
  width: 0px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  line-height: 21px;
  flex: 1;
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, status }) =>
    status === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 999px;
`
