import { Video } from "../Interface/interface"

// GET ALL VIDEOS from DB
export const getVideos = async () => {
  const videos = await fetch('http://localhost:4000/videos')
  const json = await videos.json()
  return json
}

// POST A NEW VIDEO 
export const createVideo = async (video: Video) => {
  const {title, url, description} = video
  
  await fetch("http://localhost:4000/videos", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      url,
      description 
    })
  })
}