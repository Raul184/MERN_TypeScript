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

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
    if (!video) return res.status(204).json()
    return res.status(200).json(video)

  }
  catch (err) {
    return res.json(err.message)
  }
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

export const updateVideo: RequestHandler = async (req, res) => {
  const update = await Video.findByIdAndUpdate(req.params.id, req.body)
  return res.status(202).json(update)
}

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    console.log('ID', req.params.id);
    const deleted = await Video.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(204).json()
    return res.status(202).json({
      msg: "Video successfully deleted"
    })
  }
  catch (err) {
    return res.json(err.message)
  }
}
