import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
});

const LOCAL_STORAGE_NAME = 'LSTNR_cachedRadiosList';
const LOCAL_STORAGE_DATE = 'LSTNR_Date';

async function getRadios (filter, maxResults) {

  const date = new Date();
  const todayDate = date.getDate();

  try {
    if(localStorage.getItem(LOCAL_STORAGE_DATE) != todayDate) {
      await api.get(`/api/radios?order=${filter}&maxResults=${maxResults}`)
        .then(res => {
          const { items } = res.data;
          
          localStorage.setItem(LOCAL_STORAGE_DATE, todayDate);
          localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(items));
          
          return items;

        })
    }

    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  }

  catch (e) {
    throw e;
  }
}

async function getListenersCount (radioId) {
  let listenersCount;

  await api.get(`/api/radios/listenersCount/${radioId}`)
    .then(res => {
      const { items }  = res.data;

      listenersCount = items[0].liveStreamingDetails.concurrentViewers;
    })

    return listenersCount;
}

export { getRadios, getListenersCount };