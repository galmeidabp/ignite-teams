import "styled-components";
import { theme } from "../theme"; // Verifique se o caminho está correto

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
