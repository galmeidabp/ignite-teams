import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_300};
`;