import { Router } from 'express'
import * as controllers from '../controllers/posts.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', restrict, controllers.createPost)
router.put('/posts/:id', restrict, controllers.updatePost)
router.delete('/posts/:id', restrict, controllers.deletePost)



export default router