import { useState, useEffect } from 'react';
import { getListenersCount } from '../../services/api'

const ListenersCount = ({ videoId }) => {

  const [listenersCount, setListenersCount] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function getListenersCountData (videoId) {
    setListenersCount(await getListenersCount(videoId));
    setIsLoading(false);
  }

  useEffect(() => {
    getListenersCountData(videoId);
  }, []);

  return (
    isLoading ? (
      <p>Loading...</p>
    ) : (
      <>{listenersCount}</>
    )
  )
}

export default ListenersCount;