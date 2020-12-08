import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getListenersCount } from '../../services/api';

const ListenersCount = ({ videoId, showMessage }) => {
  const [listenersCount, setListenersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getListenersCount(videoId);
      setListenersCount(data);
      setIsLoading(false);
    })();
  }, [videoId]);

  return isLoading ? (
    'Loading...'
  ) : (
    <>
      {listenersCount} {showMessage ? 'people listening now' : ''}
    </>
  );
};

ListenersCount.propTypes = {
  videoId: PropTypes.string.isRequired,
  showMessage: PropTypes.bool,
};

export default ListenersCount;
