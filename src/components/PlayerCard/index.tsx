import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
  person: string;
  onRemove: () => void;
}

export function PlayerCard({person, onRemove}: Props) {
  return (
    <Container>
      <Icon name='person' />

      <Name>
        {person}
      </Name>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />
    </Container>
  )
}