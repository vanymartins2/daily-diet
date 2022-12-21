import { Bold, Title, Image, Text, FeedbackStyleProps } from './styles'
import successImg from '@assets/images/success.png'
import failureImg from '@assets/images/fail.png'

interface FeedbackMessageProps {
  feedback: FeedbackStyleProps
}

export function FeedbackMessage({ feedback }: FeedbackMessageProps) {
  return (
    <>
      {feedback === 'SUCCESS' ? (
        <>
          <Title feedback={feedback}>Continue assim!</Title>

          <Text>
            Você continua <Bold>dentro da dieta</Bold>. Muito bem!
          </Text>

          <Image source={successImg} />
        </>
      ) : (
        <>
          <Title feedback={feedback}>Que pena!</Title>

          <Text>
            Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se
            esforçando e não desista!
          </Text>

          <Image source={failureImg} />
        </>
      )}
    </>
  )
}
