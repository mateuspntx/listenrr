import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000'
});

const LOCAL_STORAGE_NAME = 'LSTNR_cachedRadiosList';
const LOCAL_STORAGE_DATE = 'LSTNR_Date';

const formatNumber = (number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

async function getRadios(filter, maxResults) {
  const date = new Date();
  const todayDate = date.getDate();

  if (localStorage.getItem(LOCAL_STORAGE_DATE) != todayDate) {
    await api
      .get(`/api/radios?order=${filter}&maxResults=${maxResults}`)
      .then((res) => {
        const { items } = res.data;

        localStorage.setItem(LOCAL_STORAGE_DATE, todayDate);
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(items));

        return items;
      });
  }

  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
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
