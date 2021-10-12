import { useState, useEffect } from 'react'
import './PostCards.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

const PostCards = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
        _id={post._id}
        imgURL={post.imgURL}
          title={post.title}
          author={post.author}
          key={index}
        />
      ) : null
    )

  return (
    <div className='post-cards'>
      <div className='browse'>Browse</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default PostCards