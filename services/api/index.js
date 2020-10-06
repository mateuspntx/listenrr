import axios from 'axios';

import { formatNumber } from '../../utils/formatNumber';

const api = axios.create({
  baseURL: process.env.VERCEL_URL || process.env.API_BASE_URL
});

const LOCAL_STORAGE_NAME = 'LSTNR_cachedRadiosList';
const LOCAL_STORAGE_DATE = 'LSTNR_Date';

// async function getRadios(query, filter, maxResults, needCache) {
//   if (needCache) {
//     return getCache(query, filter, maxResults);
//   }

//   return getData(query, filter, maxResults);
// }

async function getRadios(params) {
  const { query, filter, maxResults, needCache } = params;

  if (needCache) {
    return getCache(query, filter, maxResults);
  }

  return getData(query, filter, maxResults);
}

async function getData(query, filter, maxResults) {
  let radiosList;

  await api
    .get(`/api/radios?q=${query}&order=${filter}&maxResults=${maxResults}`)
    .then((res) => {
      const { items } = res.data;

      radiosList = items;
    });

  return radiosList;
}

async function getCache(query, filter, maxResults) {
  let radiosList;

  const date = new Date();
  const todayDate = date.getDate();

  if (
    !localStorage.getItem(LOCAL_STORAGE_DATE) ||
    localStorage.getItem(LOCAL_STORAGE_DATE) != todayDate
  ) {
    radiosList = await getData(query, filter, maxResults);

    localStorage.setItem(LOCAL_STORAGE_DATE, todayDate);
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(radiosList));

    return radiosList;
  } else {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  }
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
