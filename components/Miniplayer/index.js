import {
  chatIcon,
  externalIcon,
  mutedVolumeIcon,
  pauseIcon,
  playIcon,
  volumeIcon,
} from '../../utils/Icons';
import {
  Container,
  PlayerActions,
  RadioInfo,
  Slider,
  SliderContainer,
  Thumb,
  Volume,
} from './styles';

const Miniplayer = () => {
  return (
    <Container>
      <RadioInfo>
        <div css={Thumb} />
        <h3>
          ChilledCow
          <span>7,835 people listening now</span>
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
};

export default Miniplayer;
