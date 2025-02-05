import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View<{theme: DefaultTheme}>`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`