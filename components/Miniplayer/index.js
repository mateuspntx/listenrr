import { useContext, useState } from 'react';

import MiniplayerLib from '../../libs/MiniplayerLib';
import {
  chatIcon,
  closeIcon,
  externalIcon,
  mutedVolumeIcon,
  pauseIcon,
  playIcon,
  volumeIcon
} from '../../utils/Icons';
import ChatIframe from '../ChatIframe';
import ListenersCount from '../ListenersCount';
import YoutubeIframe from '../YoutubeIframe';
import { MiniplayerContext } from './MiniplayerContext';
import {
  Button,
  Container,
  ExpandedContainer,
  PlayerActions,
  RadioInfo,
  Slider,
  SliderContainer,
  Volume
} from './styles';

const Miniplayer = () => {
  const miniplayerData = useContext(MiniplayerContext);
  const [expandMiniplayer, setExpandMiniplayer] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(0);
  const [iframeHeight, setIframeHeight] = useState(0);

  const {
    isShowing,
    isPlaying,
    volume,
    radioName,
    radioId,
    radioCoverUrl
  } = miniplayerData;

  const Thumb = `
    width: 35px;
    height: 35px;
    background: url('${radioCoverUrl.get}'), #232f35;
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
    MiniplayerLib.setVolume(e.target.value);
    volume.set(e.target.value);
  };

  const handleMiniplayerExternalLink = () => {
    window.open(`https://youtube.com/watch?v=${radioId.get}`, '_blank');
  };

  const handleExpand = () => {
    setExpandMiniplayer(true);
    setIframeWidth(680);
    setIframeHeight(600);
  };

  const handleMinimize = () => {
    setExpandMiniplayer(false);
    setIframeWidth(0);
    setIframeHeight(0);
  };

  const CloseButton = () => {
    return (
      <Button
        style={{ position: 'absolute', top: '0', margin: '10px' }}
        onClick={handleMinimize}
      >
        <img
          src={closeIcon}
          alt="Minimize miniplayer"
          title="Minimize miniplayer"
          className="pointer"
          width="50px"
        />
      </Button>
    );
  };

  if (isShowing.get) {
    return (
      <Container expandMiniplayer={expandMiniplayer}>
        <RadioInfo>
          <div css={Thumb} />
          <h3>
            {radioName.get}
            <span>
              <ListenersCount videoId={radioId.get} showMessage />
            </span>
          </h3>
        </RadioInfo>
        <PlayerActions expandMiniplayer={expandMiniplayer}>
          {isPlaying.get ? (
            <Button onClick={handleMiniplayerPause}>
              <img
                src={pauseIcon}
                alt="Pause"
                title="Pause"
                className="pointer"
              />
            </Button>
          ) : (
            <Button onClick={handleMiniplayerPlay}>
              <img src={playIcon} alt="Play" title="Play" className="pointer" />
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
                value={localStorage.getItem('LSTNR_playerVolume') || volume.get}
                onChange={(e) => handleMiniplayerVolume(e)}
              />
            </SliderContainer>
          </Volume>
          <Button onClick={expandMiniplayer ? handleMinimize : handleExpand}>
            <img
              src={chatIcon}
              alt="Open chat"
              title="Open chat"
              className="pointer"
            />
          </Button>
          <Button onClick={handleMiniplayerExternalLink}>
            <img
              src={externalIcon}
              alt="Open on Youtube"
              title="Open on Youtube"
              className="pointer"
            />
          </Button>
        </PlayerActions>
        <ExpandedContainer expandMiniplayer={expandMiniplayer}>
          <YoutubeIframe width={iframeWidth} height={iframeHeight} />
          {expandMiniplayer && <ChatIframe radioId={radioId.get} />}
        </ExpandedContainer>
        {expandMiniplayer && <CloseButton />}
      </Container>
    );
  } else {
    return false;
  }
};

export default Miniplayer;
