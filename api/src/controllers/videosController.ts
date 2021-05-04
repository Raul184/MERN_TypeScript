import { RequestHandler } from 'express'
import Video from '../models/Video'


export const getVideos: RequestHandler = (req, res) => {
  return res.json('Getting videos')
}

export const getVideo: RequestHandler = (req, res) => {
  return res.json('Getting videos')
}

export const createVideo: RequestHandler = async (req, res) => {
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
