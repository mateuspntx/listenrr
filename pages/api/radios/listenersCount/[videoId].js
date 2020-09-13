export default async (req, res) => {

  const key = process.env.YOUTUBE_API_KEY;

  const {
    query: { videoId},
  } = req;

  const url = `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&fields=items%2FliveStreamingDetails%2FconcurrentViewers&key=${key}`

  const data = await fetch(url);
  const { items } = await data.json();

  try {
    return res.json({ items });
  } 
  
  catch {
    return res.status(400).json(
      { message: 'Can\'t get listeners count at this moment'
    });
  }
}