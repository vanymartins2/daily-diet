import styled, { css } from 'styled-components/native'

export type FeedbackStyleProps = 'SUCCESS' | 'FAILURE'

type Props = {
  feedback: FeedbackStyleProps
}

export const Title = styled.Text<Props>`
  ${({ theme, feedback }) =>
    feedback === 'SUCCESS'
      ? css`
          color: ${theme.COLORS.GREEN_DARK};
        `
      : css`
          color: ${theme.COLORS.RED_DARK};
        `}
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;

  line-height: 31px;
  margin-bottom: 8px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  line-height: 21px;
  text-align: center;
  margin-bottom: 25px;
`

export const Bold = styled(Text)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Image = styled.Image`
  margin-bottom: 25px;
`
