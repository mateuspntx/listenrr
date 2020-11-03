import { getElement as $ } from '../../utils/getElement';

let Player;

const passPlayerEvent = (e) => {
  const localStorageVolume = localStorage.getItem('LSTNR_playerVolume');

  if (localStorageVolume) {
    e.target.setVolume(localStorageVolume);
  }

  Player = e;
};

const MiniplayerLib = {};

MiniplayerLib.Init = async (htmlElement, videoId) => {
  const options =
    '?autoplay=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&showinfo=0';

  $(
    '#youtube__iframe'
  ).src = await `https://www.youtube.com/embed/${videoId}${options}`;

  new window.YT.Player(htmlElement, {
    videoId,
    events: {
      onReady: passPlayerEvent
    }
  });
};

MiniplayerLib.importYTAPI = () => {
  const tag = document.createElement('script');
  const firstScriptTag = document.getElementsByTagName('script')[0];

  tag.src = 'https://www.youtube.com/iframe_api';
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

MiniplayerLib.Play = () => {
  Player.target.playVideo();
  console.log('Playing');
};

MiniplayerLib.Pause = () => {
  Player.target.pauseVideo();
  console.log('Paused');
};

MiniplayerLib.setVolume = (e) => {
  localStorage.setItem('LSTNR_playerVolume', e);
  Player.target.setVolume(e);
  console.log('Set volume to: ', e);
};

export default MiniplayerLib;
