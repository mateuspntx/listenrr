import { RadioCardDiv, Cover,Title, Label } from './styles';
import { playIcon } from '../../utils/Icons';

const RadioCard = ({ coverUrl, channelTitle, videoId }) => {
  return (
    <RadioCardDiv>
      <Cover cover={coverUrl}>
        <img src={playIcon} alt="Play"/>
      </Cover>
      <Title>{ channelTitle }</Title>
      <Label></Label>
    </RadioCardDiv>
  )
}

export default RadioCard;