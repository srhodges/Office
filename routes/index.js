import { Router } from 'express'
import postsRoutes from './posts.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', postsRoutes)

export default router