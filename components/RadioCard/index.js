import { memo } from 'react';

import MiniplayerLib from '../../libs/MiniplayerLib';
import { playIcon } from '../../utils/Icons';
import ListenersCount from '../ListenersCount';
import { useMiniplayer } from '../Miniplayer/MiniplayerContext';
import { Cover, Label, RadioCardDiv, Title } from './styles';

const RadioCard = ({ coverUrl, channelTitle, videoId, showListenersCount }) => {
  const {
    isShowing,
    isPlaying,
    radioName,
    radioId,
    radioCoverUrl,
  } = useMiniplayer();

  const handleMiniplayer = () => {
    radioId.set(videoId);
    radioName.set(channelTitle);
    radioCoverUrl.set(coverUrl);
    isShowing.set(true);
    isPlaying.set(true);
    MiniplayerLib.Init('youtube__iframe', videoId);
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

export default memo(RadioCard);
