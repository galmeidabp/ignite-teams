import { TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled(TextInput)`

  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${({theme}: {theme: DefaultTheme}) => css`
    background-color:  ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;