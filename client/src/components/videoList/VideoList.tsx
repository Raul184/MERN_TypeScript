import React, { useEffect } from 'react'

const VideoList = () => {
  useEffect(() => {
    loadVideos()
  }, [])
  const loadVideos = async () => {
    const videos = await fetch('http://localhost:4000/videos')
    const json = await videos.json()
    console.log('Videos', json);
  }
  return (
    <div>
      List
    </div>
  )
}

export default VideoList;