import { Video } from "../Interface/interface"

// GET ALL VIDEOS from DB
export const getVideos = async () => {
  const videos = await fetch('http://localhost:4000/videos')
  const json = await videos.json()
  return json
}

// GET A VIDEO from DB
export const getVideo = async (id:string) => {
  const video = await fetch(`http://localhost:4000/videos/${id}`)
  const json = await video.json()
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

// UPDATE A NEW VIDEO 
export const updateVideo = async (id:string, video: Video) => {
  const {title, url, description} = video
  
  await fetch(`http://localhost:4000/videos/${id}`, {
    method: "put",
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

// DELETE A NEW VIDEO 
export const deleteVideo = async (id:string) => {
  await fetch(`http://localhost:4000/videos/${id}`, {
    method: "delete"
  })
}