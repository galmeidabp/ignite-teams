import styled from "styled-components/native";
import { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  margin: 32px 0;  
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`