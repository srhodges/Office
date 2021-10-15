import { useState, useEffect } from 'react'
import './PostDetail.css'
import  Layout  from '../../components/Layout/Layout'
import { getPost, deletePost, updatePost } from '../../services/posts'
import { useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const PostDetail = (props) => {
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  const history = useHistory()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  // const handleOnClick = async (event) => {
  //   event.preventDefault()
  //   const deleted = await deletePost(post)
  //   props.setDeleted((prevState) => !prevState)
  //   history.push('/posts')
  // }
  props.setIsUser(true)
  return (
    

      <div className='details-page'>
        <div className="details-container">

        {/* <img
          className='post-detail-image'
          src={post.imgURL}
          alt={post.title}
        /> */}
        <div className='details-title-container'>
          <div className='title'>{post.title}</div>
          <div className='author'>{post.author}</div>
          <div className="details-content">
          <div className='content'>{post.content}</div>
          </div>
              </div>
          <div className='button-container'>
            <Link className='button-link' to={`/posts/${id}/edit`}>
              <button className='edit-button'>
              Edit
              </button>
            </Link>
            <Link className='button-link' to={`/posts/`}>
            <button 
              className='delete-button'
                onClick={() => deletePost(post._id)}
              >
              Delete
            </button>
              </Link>
          </div>
        </div>
      </div>
    
  )
}

export default PostDetail