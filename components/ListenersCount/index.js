import { useState, useEffect } from 'react';
import { getListenersCount } from '../../services/api'

const formatNumber = (number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const ListenersCount = ({ videoId }) => {

  const [listenersCount, setListenersCount] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function getListenersCountData (videoId) {
    const data = await getListenersCount(videoId);
    
    if(data == undefined) {
      setListenersCount('No');
    }

    else {
      setListenersCount(data);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getListenersCountData(videoId);
  }, []);

  return (
    isLoading ? (
      <p>Loading...</p>
    ) : (
      <>{ formatNumber(listenersCount) }</>
    )
  )
}

export default ListenersCount;