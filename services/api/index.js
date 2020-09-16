import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
});

const LocalStorageName = 'LSTNR_cachedRadiosList';

async function getRadios (filter, maxResults) {
  try {
    if(!localStorage.getItem(LocalStorageName)) {
      await api.get(`/api/radios?order=${filter}&maxResults=${maxResults}`)
        .then(res => {
          const { items } = res.data;
          
          localStorage.setItem(LocalStorageName, JSON.stringify(items));
          
          return items;

        })
    }
    
    return JSON.parse(localStorage.getItem(LocalStorageName));
    
  }

  catch (e) {
    return e;
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