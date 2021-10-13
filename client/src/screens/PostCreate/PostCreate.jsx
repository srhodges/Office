import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import  Layout  from '../../components/Layout/Layout'
import { createPost } from '../../services/posts'
import './PostCreate.css'

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgURL: '',
    content: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }
  return (
    <div className="create-container">
      <div className="create-form-container">
        
    <Layout user={props.user}>
      <form onSubmit={handleSubmit}>
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
          autoFocus
          onChange={handleChange}
          />
        
          <input
            className='input-image-link'
            placeholder='Image Link'
            value={post.imgURL}
            name='imgURL'
            onChange={handleChange}
            />
        <textarea
          className='textarea-content'
          rows={10}
          placeholder='Content'
          value={post.content}
          name='content'
          required
          onChange={handleChange}
          />
        <button type='submit' className='button'>
          New Post
        </button>
      </form>
    </Layout>
          </div>
          </div>
  )
}

export default PostCreate