import React, { useState } from 'react';

export const MiniplayerContext = React.createContext();

export const MiniplayerProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [radioId, setRadioId] = useState('');
  const [radioChannelUrl, setRadioChannelUrl] = useState('');
  const [radioName, setRadioName] = useState('Testing');
  const [listenersCount, setListenersCount] = useState('');

  const states = {
    isShowing: { get: isShowing, set: setIsShowing },
    isPlaying: { get: isPlaying, set: setIsPlaying },
    isMuted: { get: isMuted, set: setIsMuted },
    radioId: { get: radioId, set: setRadioId },
    radioChannelUrl: { get: radioChannelUrl, set: setRadioChannelUrl },
    radioName: { get: radioName, set: setRadioName },
    listenersCount: { get: listenersCount, set: setListenersCount }
  };

  return (
    <MiniplayerContext.Provider value={states}>
      {children}
    </MiniplayerContext.Provider>
  );
};
