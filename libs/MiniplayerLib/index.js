import { getElement as $ } from '../../utils/getElement';

const MiniplayerLib = {
  YTIframe: {
    Element: '#youtube__iframe',
    Options:
      '?autoplay=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&showinfo=0'
  },
  YTPlayer: []
};

MiniplayerLib.passPlayerEvent = (e) => {
  MiniplayerLib.YTPlayer.splice(0, 1, e);

  if (MiniplayerLib.getLocalVolume()) {
    e.target.setVolume(MiniplayerLib.getLocalVolume());
  } else {
    MiniplayerLib.setLocalVolume(50);
    e.target.setVolume(50);
  }

  const iframe = $(MiniplayerLib.YTIframe.Element);

  const message = function (func) {
    return JSON.stringify({
      event: 'command',
      func: func,
      args: []
    });
  };

  const execCommand = function (iframe) {
    return function (func) {
      return function () {
        iframe.contentWindow.postMessage(message(func), '*');
      };
    };
  };

  const iframeCommand = execCommand(iframe);

  iframeCommand(e.target.playVideo());
};

MiniplayerLib.importYTAPI = () => {
  const tag = document.createElement('script');
  const firstScriptTag = document.getElementsByTagName('script')[0];

  tag.src = 'https://www.youtube.com/iframe_api';
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

MiniplayerLib.Play = () => {
  MiniplayerLib.YTPlayer[0].target.playVideo();
  console.log('Playing');
};

MiniplayerLib.Pause = () => {
  MiniplayerLib.YTPlayer[0].target.pauseVideo();
  console.log('Paused');
};

MiniplayerLib.setVolume = (e) => {
  MiniplayerLib.YTPlayer[0].target.setVolume(e);
  console.log('Set volume to: ', e);
};

MiniplayerLib.getLocalVolume = () => localStorage.getItem('LSTNR_playerVolume');

MiniplayerLib.setLocalVolume = (e) =>
  localStorage.setItem('LSTNR_playerVolume', e);

MiniplayerLib.Init = async (htmlElement, videoId) => {
  $(
    MiniplayerLib.YTIframe.Element
  ).src = await `https://www.youtube.com/embed/${videoId}${MiniplayerLib.YTIframe.Options}`;

  new window.YT.Player(htmlElement, {
    videoId,
    playerVars: {
      autoplay: 1
    },
    events: {
      onReady: MiniplayerLib.passPlayerEvent
    }
  });
};

export default MiniplayerLib;
