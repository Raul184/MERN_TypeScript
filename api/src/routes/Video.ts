import { Router } from 'express'
import * as videoCtrl from '../controllers/videosController'

const router = Router()

router.get('/videos', videoCtrl.getVideos)

router.get('/videos/:id', videoCtrl.getVideo)

router.post('/videos', videoCtrl.createVideo)

router.put('/videos/:id', videoCtrl.updateVideo)

router.delete('/videos/:id', videoCtrl.deleteVideo)





export default router;