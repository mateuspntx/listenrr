import { Container, RadioInfo, PlayerActions } from './styles';

import {
  playIcon, 
  pauseIcon, 
  volumeIcon,
  mutedVolumeIcon, 
  chatIcon, 
  externalIcon
} from '../../utils/Icons';

const Miniplayer = () => {
  return (
    <Container>
      <RadioInfo>
        <h3>ChilledCow</h3>
        <h4>7,835 people listening now</h4>
      </RadioInfo>
      <PlayerActions>
        <img src={pauseIcon} alt="Pause"/>
        <img src={volumeIcon} alt="Volume"/>
        <img src={chatIcon} alt="Chat"/>
        <img src={externalIcon} alt="Channel"/>
      </PlayerActions>
    </Container>
  )
}

export default Miniplayer;