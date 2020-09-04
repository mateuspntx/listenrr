import { RadioCardDiv, Cover,Title, Label } from './styles';
import { playIcon } from '../../utils/Icons';

const RadioCard = () => {
  return (
    <RadioCardDiv>
      <Cover cover="./assets/images/cover.jpg">
        <img src={playIcon} alt="Play"/>
      </Cover>
      <Title>ChilledCow</Title>
      <Label>7,835 listeners</Label>
    </RadioCardDiv>
  )
}

export default RadioCard;