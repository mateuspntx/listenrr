export default async (req, res) => {
  
  //Filters API can get = relevance (default), viewCount, videoCount, rating, date, title
  //Max results API can get = 50

  const key = process.env.YOUTUBE_API_KEY;

  const {
    query: { 
      order,
      maxResults,
     },
  } = req;

  const defaultParams = `part=snippet&videoCategoryId=10&eventType=live`
  const url = `https://www.googleapis.com/youtube/v3/search?${defaultParams}&maxResults=${maxResults}&order=${order}&type=video&key=${key}`

  const data = await fetch(url);
  const { items } = await data.json();

  try {
    return res.json({ items });
  } 
  
  catch {
    return res.status(400).json(
      { message: 'Can\'t get radios list at this moment'
    });
  }
}