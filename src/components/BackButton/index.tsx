import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

interface BackButtonProps extends TouchableOpacityProps {
  size: number
  color: string
}

export function BackButton({ size, color, ...rest }: BackButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <ArrowLeft size={size} color={color} />
    </TouchableOpacity>
  )
}
