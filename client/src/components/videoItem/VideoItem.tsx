import React from 'react'
import { Video } from '../Interface/interface'
import ReactPlayer from 'react-player'
import '../styles/styles.css'

interface Props {
  video: Video
}
const VideoItem = ({ video }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span className="text-danger">X</span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer
            width='100%'
            height='64%' 
            url={video.url} 
          />
        </div>
      </div>
    </div>
  )
}

export default VideoItem;