import { useContext } from 'react';

import { playIcon } from '../../utils/Icons';
import ListenersCount from '../ListenersCount';
import { MiniplayerContext } from '../Miniplayer/MiniplayerContext';
import { Cover, Label, RadioCardDiv, Title } from './styles';

const RadioCard = ({ coverUrl, channelTitle, videoId, showListenersCount }) => {
  const miniplayerData = useContext(MiniplayerContext);

  const {
    isShowing,
    isPlaying,
    radioName,
    radioId,
    radioCoverUrl
  } = miniplayerData;

  const handleMiniplayer = () => {
    radioId.set(videoId);
    radioName.set(channelTitle);
    radioCoverUrl.set(coverUrl);
    isShowing.set(true);
    isPlaying.set(true);
  };

  return (
    <RadioCardDiv onClick={() => handleMiniplayer()}>
      <Cover cover={coverUrl}>
        <img src={playIcon} alt="Play" />
      </Cover>
      <Title>{channelTitle}</Title>
      <Label>
        {showListenersCount ? (
          <>
            <ListenersCount videoId={videoId} /> listeners
          </>
        ) : (
          ''
        )}
      </Label>
    </RadioCardDiv>
  );
};

export default RadioCard;
