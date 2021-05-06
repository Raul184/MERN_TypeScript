export const getVideos = async () => {
  const videos = await fetch('http://localhost:4000/videos')
  const json = await videos.json()
  return json
}