import { RadioCardDiv, Cover,Title, Label } from './styles';
import { playIcon } from '../../utils/Icons';

import ListenersCount from '../ListenersCount';

const RadioCard = ({ coverUrl, channelTitle, videoId, showListenersCount }) => {
  return (
    <RadioCardDiv>
      <Cover cover={coverUrl}>
        <img src={playIcon} alt="Play"/>
      </Cover>
      <Title>{ channelTitle }</Title>
      <Label>
        {showListenersCount ? (
          <>
            <ListenersCount videoId={videoId}/> listeners
          </>
        ) : ('')}
      </Label>
    </RadioCardDiv>
  )
}

export default RadioCard;