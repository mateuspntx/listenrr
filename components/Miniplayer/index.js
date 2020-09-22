import { useContext, useEffect, useState } from 'react';

import MiniplayerLib from '../../libs/MiniplayerLib';
import {
  chatIcon,
  externalIcon,
  mutedVolumeIcon,
  pauseIcon,
  playIcon,
  volumeIcon
} from '../../utils/Icons';
import ListenersCount from '../ListenersCount';
import { MiniplayerContext } from './MiniplayerContext';
import {
  Button,
  Container,
  PlayerActions,
  RadioInfo,
  Slider,
  SliderContainer,
  Volume
} from './styles';

const Miniplayer = () => {
  const miniplayerData = useContext(MiniplayerContext);

  const [isPlaying, setIsPlaying] = useState(true);

  const { isShowing, radioName, radioId, radioCoverUrl } = miniplayerData;

  const Count = () => <ListenersCount videoId={radioId.get} />;

  useEffect(() => {
    Count();
  }, []);

  const Thumb = `
    width: 35px;
    height: 35px;
    background: url('${CSS.escape(radioCoverUrl.get)}'), #232f35;
    background-size: cover;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  `;

  const handleMiniplayerPause = () => {
    setIsPlaying(false);
    MiniplayerLib.Pause();
  };

  const handleMiniplayerPlay = () => {
    setIsPlaying(true);
    MiniplayerLib.Play();
  };

  if (isShowing.get) {
    return (
      <Container>
        <RadioInfo>
          <div css={Thumb} />
          <h3>
            {radioName.get}
            {/* <span><Count /> people listening now</span> */}
          </h3>
        </RadioInfo>
        <PlayerActions>
          {isPlaying ? (
            <Button onClick={() => handleMiniplayerPause()}>
              <img src={pauseIcon} alt="Pause" />
            </Button>
          ) : (
            <Button onClick={() => handleMiniplayerPlay()}>
              <img src={playIcon} alt="Play" />
            </Button>
          )}
          <Volume>
            <img src={volumeIcon} alt="Volume" />
            <SliderContainer>
              <Slider type="range" />
            </SliderContainer>
          </Volume>
          <Button>
            <img src={chatIcon} alt="Chat" />
          </Button>
          <Button>
            <img src={externalIcon} alt="Channel" />
          </Button>
        </PlayerActions>
      </Container>
    );
  } else {
    return false;
  }
};

export default Miniplayer;
