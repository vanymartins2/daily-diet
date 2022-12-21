import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`
import { TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
  margin-bottom: 8px;
`

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
  align-items: center;
  align-self: stretch;
  min-height: 48px;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 6px;
`

export const MaskedInput = styled(TextInputMask)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
  align-items: center;
  align-self: stretch;
  min-height: 48px;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 6px;
`

export const DateTime = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const Date = styled.View`
  flex: 1;
`

export const Time = styled.View`
  flex: 1;
  margin-left: 20px;
`
export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
