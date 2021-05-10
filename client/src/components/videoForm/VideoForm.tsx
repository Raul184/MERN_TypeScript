import React, {ChangeEvent, useState} from 'react'
import { FormEvent } from 'react'
import {Params, Video} from '../Interface/interface'
import {toast} from 'react-toastify'
import * as videoService from '../services/Video.services'
import {useHistory, useParams} from 'react-router-dom'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const VideoForm = () => {
  const initState =  {
    title: "",
    url: "",
    description: ""
  }
  const history = useHistory()
  const params = useParams<Params>()
  console.log(params)

  const [video, setVideo] = useState<Video>(initState)

  const handleChange = (e:InputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await videoService.createVideo(video)
    toast.success('New video added')
    setVideo(initState)
    history.push('/')    
  } 
  const btn = params.id ? <button 
    className="btn btn-info center"
    style={{marginLeft: '10px'}}
  >
    Update Video
  </button>:
  <button 
    className="btn btn-primary center"
    style={{marginLeft: '10px'}}
  >
    Create Video
  </button>
  
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div style={{margin: '20px 10px'}}>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  value={video.title}
                  placeholder="Please input a title"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div style={{margin: '20px 10px'}}>
                <input
                  onChange={handleChange}
                  type="text"
                  name="url"
                  value={video.url}
                  placeholder="...someWeb.com"
                  className="form-control"
                />
              </div>
              <div style={{margin: '20px 10px'}}>
                <textarea
                  onChange={handleChange}
                  name="Description"
                  rows={3}
                  className="form-control"
                ></textarea>
              </div>
              {btn}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoForm;