import { RequestHandler } from 'express'
import Video from '../models/Video'


export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos)
  }
  catch (err) {
    return res.json(err.message)
  }
}

export const getVideo: RequestHandler = (req, res) => {
  return res.json('Getting videos')
}

export const createVideo: RequestHandler = async (req, res) => {
  const url = await Video.findOne({ url: req.body.url })
  if (url) return res.status(301).json({
    msg: "Sorry, this video is already available"
  })

  const video = new Video(req.body)
  const vSaved = await video.save()
  return res.json(vSaved)
}

export const updateVideo: RequestHandler = (req, res) => {
  return res.json('Getting videos')
}

export const deleteVideo: RequestHandler = (req, res) => {
  return res.json('Getting videos')
}
