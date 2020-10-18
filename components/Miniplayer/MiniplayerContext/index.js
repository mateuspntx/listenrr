import React, { useState } from 'react';

export const MiniplayerContext = React.createContext();

export const MiniplayerProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [radioId, setRadioId] = useState('');
  const [radioChannelUrl, setRadioChannelUrl] = useState('');
  const [radioName, setRadioName] = useState('Loading...');
  const [radioCoverUrl, setRadioCoverUrl] = useState('');
  const [listenersCount, setListenersCount] = useState('No');
  const [radiosList, setRadiosList] = useState([]);

  const states = {
    isShowing: { get: isShowing, set: setIsShowing },
    isPlaying: { get: isPlaying, set: setIsPlaying },
    volume: { get: volume, set: setVolume },
    isMuted: { get: isMuted, set: setIsMuted },
    radioId: { get: radioId, set: setRadioId },
    radioChannelUrl: { get: radioChannelUrl, set: setRadioChannelUrl },
    radioName: { get: radioName, set: setRadioName },
    radioCoverUrl: { get: radioCoverUrl, set: setRadioCoverUrl },
    listenersCount: { get: listenersCount, set: setListenersCount },
    radiosList: { get: radiosList, set: setRadiosList }
  };

  return (
    <MiniplayerContext.Provider value={states}>
      {children}
    </MiniplayerContext.Provider>
  );
};
