import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT || 3000

import db from './db/connection.js'
import Post from './models/post.js'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from './models/user.js'

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11
const TOKEN_KEY = process.env.TOKEN_KEY || 'alonggoodkey'


const today = new Date()
const exp = new Date(today)
exp.setDate(today.getDate() + 30)


const app = express()
app.use(cors())

app.use(express.json())
app.use(logger('dev'))

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})

app.post('/sign-up', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      username,
      email,
      password_digest,
    })

    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
})

app.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email }).select(
      'username email password_digest'
    )
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
})

app.post('/verify', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send('Not Authorized')
  }
})


app.get('/', (req, res) => res.send("This is root!"))

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if (!post) throw Error('Post not found')
        res.json(post)
    } catch (e) {
        console.log(e)
        res.send('Post not found!')
    }
})

app.post('/posts', async (req, res) => {
    try {
        const post = await new Post(req.body)
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.put('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted")
        }
        throw new Error("Post not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})