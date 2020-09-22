/* eslint-disable no-unused-vars */
import { getElement as $ } from '../../utils/getElement';

let player;

const MiniplayerLib = {};

MiniplayerLib.Init = (htmlElement, videoId) => {
  const options =
    '?autoplay=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&showinfo=0';

  $(
    '#youtube__iframe'
  ).src = `https://www.youtube.com/embed/${videoId}${options}`;

  player = new YT.Player(htmlElement, {
    videoId,
    events: {
      onReady: console.log('Playing YT videoId: ', videoId)
    }
  });
};

MiniplayerLib.Play = () => {
  player.playVideo();
  console.log('Playing YT Video');
};

MiniplayerLib.Pause = () => {
  player.pauseVideo();
  console.log('Paused YT Video');
};

export default MiniplayerLib;
