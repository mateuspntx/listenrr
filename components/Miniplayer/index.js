import { useContext, useEffect } from 'react';

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

  if (isShowing.get) {
    return (
      <Container>
        <RadioInfo>
          <div css={Thumb} />
          <h3>
            {radioName.get}
            <span>
              <Count /> people listening now
            </span>
          </h3>
        </RadioInfo>
        <PlayerActions>
          <img src={pauseIcon} alt="Pause" />
          <Volume>
            <img src={volumeIcon} alt="Volume" />
            <SliderContainer>
              <Slider type="range" />
            </SliderContainer>
          </Volume>
          <img src={chatIcon} alt="Chat" />
          <img src={externalIcon} alt="Channel" />
        </PlayerActions>
      </Container>
    );
  } else {
    return false;
  }
};

export default Miniplayer;
