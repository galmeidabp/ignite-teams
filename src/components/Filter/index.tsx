import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps } from "./styles";
import { Title } from "@components/GroupCard/styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({title, isActive = false, ...rest}: Props) {
  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}