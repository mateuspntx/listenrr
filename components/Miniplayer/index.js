import { useContext, useEffect } from 'react';

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

  const {
    isShowing,
    isPlaying,
    volume,
    radioName,
    radioId,
    radioCoverUrl
  } = miniplayerData;

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
    MiniplayerLib.Pause();
    isPlaying.set(false);
  };

  const handleMiniplayerPlay = () => {
    MiniplayerLib.Play();
    isPlaying.set(true);
  };

  const handleMiniplayerVolume = (e) => {
    volume.set(e.target.value);
    MiniplayerLib.setVolume(e.target.value);
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
          {isPlaying.get ? (
            <Button onClick={() => handleMiniplayerPause()}>
              <img src={pauseIcon} alt="Pause" />
            </Button>
          ) : (
            <Button onClick={() => handleMiniplayerPlay()}>
              <img src={playIcon} alt="Play" />
            </Button>
          )}
          <Volume>
            <img
              src={volume.get == 0 ? mutedVolumeIcon : volumeIcon}
              alt="Volume"
            />
            <SliderContainer>
              <Slider
                type="range"
                value={volume.get}
                onChange={(e) => handleMiniplayerVolume(e)}
              />
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
