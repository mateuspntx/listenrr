import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

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
  Thumb,
  Volume
} from './styles';

const Miniplayer = () => {
  const router = useRouter();
  const miniplayerData = useContext(MiniplayerContext);
  const [expandMiniplayer, setExpandMiniplayer] = useState(false);

  const {
    isShowing,
    isPlaying,
    volume,
    radioName,
    radioId,
    radioCoverUrl
  } = miniplayerData;

  useEffect(() => {
    const changeExpandMiniplayer = (url) => {
      url.includes('?expandMiniplayer')
        ? setExpandMiniplayer(true)
        : setExpandMiniplayer(false);
    };

    router.events.on('routeChangeStart', changeExpandMiniplayer);

    return () => {
      router.events.off('routeChangeStart', changeExpandMiniplayer);
    };
  }, [expandMiniplayer]);

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
    router.push('/', '?expandMiniplayer');
  };

  const handleMinimize = () => {
    setExpandMiniplayer(false);
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
        <RadioInfo
          expandMiniplayer={expandMiniplayer}
          onClick={expandMiniplayer ? handleMinimize : handleExpand}
        >
          <Thumb src={radioCoverUrl.get} />
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
          <YoutubeIframe showPlayer={expandMiniplayer} />
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
