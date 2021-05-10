import React, { useEffect, useState } from 'react'
import VideoItem from '../videoItem/VideoItem'
import { Video } from '../Interface/interface'
import * as videoService from '../services/Video.services'

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([])
  useEffect(() => {
    loadVideos()
  }, [])

  const loadVideos = async () => {
    const res = await videoService.getVideos()
    setVideos(res)
  }

  return (
    <div className="row">
      { videos.map(v => {
        return <VideoItem key={v._id} video={v} />
      })}
    </div>
  )
}

export default VideoList;