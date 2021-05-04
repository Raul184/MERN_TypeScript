import { Router } from 'express'

const router = Router()

router.get('/videos', (req, res) => res.json('Getting videos'))






export default router;