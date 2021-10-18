import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  
  await db.dropDatabase()

  const posts =
    [
      {
        "title": "post 1",
        "imgURL": "image",
        "content": "It’s quiet here, on the bench. It’s getting dark. I think I see the shadowy things that carried you away. I understand, now, why you wanted to escape. I want to go with them too, sometimes. Would they bring me to you? I won’t go with them, at least not yet. I think things will feel better in the spring, when you return to me, like Persephone. Did I get that right? Anyway, I want to see your tree again, as it was that day, shimmering in its sequin foliage, bending and yearning, growing. Yes, I think things will feel better in the spring, as they always do in the sun.",
        "author": "Shane Ranson"
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