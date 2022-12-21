import { TagStatusProps, Container, Status, Text } from './styles'

interface TagProps {
  text: string
  type: TagStatusProps
}

export function Tag({ text, type }: TagProps) {
  return (
    <Container>
      <Status type={type} />

      <Text>{text}</Text>
    </Container>
  )
}
