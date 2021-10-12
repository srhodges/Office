import { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { getPost } from '../../services/posts'
import { updatePost } from '../../services/posts'
import  Layout  from '../../components/Layout/Layout'

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgURL: '',
    content: '',
  })

  const [updated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (updated) {
    return <Redirect to={`/posts/${id}`} />
    // needs to update selected post, not new-post route
  }

  return (
    <Layout user={props.user}>
      <form className='edit-form' onSubmit={handleSubmit}>
      <div className='post-edit'>
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-title'
            placeholder='Title'
            value={post.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-author'
            placeholder='Author'
            value={post.author}
            name='author'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-content'
            rows={10}
            cols={78}
            placeholder='Conttent'
            value={post.content}
            name='content'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </form>
    </Layout>
  )
}

export default PostEdit