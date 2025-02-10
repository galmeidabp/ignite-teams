import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)<{theme: DefaultTheme}>`
  flex: 1;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`