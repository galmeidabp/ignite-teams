import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { MaterialIcons } from '@expo/vector-icons'
import { DefaultTheme } from "styled-components/native"

export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({theme, type}: {theme: DefaultTheme; type: ButtonIconStyleProps}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))<Props>``