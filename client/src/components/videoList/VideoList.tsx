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
    console.log('RES', res);
    // Displayed by date
    const orderedVideos = res.map((v:any) => {
      return {
        ...v,
        createdAt: v.createdAt ? new Date(v.createdAt): new Date(),
        updatedAt: v.updatedAt ? new Date(v.updatedAt): new Date(),
      }   //eslint-disable-next-line
    })
    .sort((
      a: { createdAt: { getTime: () => number } },
      b: { createdAt: { getTime: () => number } }) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    )
    setVideos(orderedVideos)
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