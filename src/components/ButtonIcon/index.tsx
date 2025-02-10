import { TouchableOpacityProps } from "react-native"
import { Container, Icon, ButtonIconStyleProps } from "./styles"
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  type?: ButtonIconStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({icon, type = "PRIMARY", ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon}
        type={type}
       />
    </Container>
  )
}