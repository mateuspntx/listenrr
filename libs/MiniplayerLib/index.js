import { getElement as $ } from '../../utils/getElement';

let Player;

const passPlayerEvent = (e) => {
  Player = e;
};

const MiniplayerLib = {};

MiniplayerLib.Init = (htmlElement, videoId) => {
  const options =
    '?autoplay=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&showinfo=0';

  $(
    '#youtube__iframe'
  ).src = `https://www.youtube.com/embed/${videoId}${options}`;

  new window.YT.Player(htmlElement, {
    videoId,
    events: {
      onReady: passPlayerEvent
    }
  });
};

MiniplayerLib.Play = () => {
  Player.target.playVideo();
  console.log('Playing');
};

MiniplayerLib.Pause = () => {
  Player.target.pauseVideo();
  console.log('Paused');
};

MiniplayerLib.setVolume = (event) => {
  Player.target.setVolume(event);
  console.log('Set volume to: ', event);
};

export default MiniplayerLib;
