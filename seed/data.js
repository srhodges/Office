import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  
  await db.dropDatabase()

  const posts =
    [
      {
        "title": "post 1",
        "imgURL": "image",
        "content": "some good stuff",
        "author": "janet jackson"
      },
      {
        "title": "post 2",
        "imgURL": "image",
        "content": "more good stuff",
        "author": "stephanie hodges"
      }
    ]

  await Post.insertMany(posts)
  console.log("Created posts!")

  
  db.close()
}

insertData()