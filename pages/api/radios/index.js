export default async (req, res) => {
  //Filters API can get = relevance (default), viewCount, videoCount, rating, date, title
  //Max results API can get = 50

  const key = process.env.YOUTUBE_API_KEY;

  const {
    query: { q, order, maxResults }
  } = req;

  const defaultParams = `part=snippet&videoCategoryId=10&eventType=live`;
  const url = `https://www.googleapis.com/youtube/v3/search?q=${q}&order=${order}&${defaultParams}&maxResults=${maxResults}&type=video&key=${key}`;

  try {
    const data = await fetch(url);
    const items = await data.json();

    return res.json(items);
  } catch {
    return res
      .status(400)
      .json({ message: "Can't get radios list at this moment" });
  }
};
