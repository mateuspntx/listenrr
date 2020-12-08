import axios from 'axios';

import { formatNumber } from '../../utils/formatNumber';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

async function getRadios(params) {
  const { query, filter, maxResults } = params;

  let radiosList;

  await api
    .get(`/api/radios?q=${query}&order=${filter}&maxResults=${maxResults}`)
    .then((res) => {
      const { items } = res.data;

      radiosList = items;
    });

  return radiosList;
}

async function getListenersCount(radioId) {
  let listenersCount;

  await api.get(`/api/radios/listenersCount/${radioId}`).then((res) => {
    const { items } = res.data;

    const count = items[0].liveStreamingDetails.concurrentViewers;

    if (
      typeof count != 'undefined' &&
      count != null &&
      count.length != null &&
      count.length > 0
    ) {
      listenersCount = formatNumber(count);
    } else {
      listenersCount = 'No';
    }
  });

  return listenersCount;
}

export { getRadios, getListenersCount };
