import {MaterialIcons} from '@expo/vector-icons'
import styled from 'styled-components/native'
import { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({theme}: {theme: DefaultTheme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}: {theme: DefaultTheme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;