import { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { getPost } from '../../services/posts'
import { updatePost } from '../../services/posts'
import Layout from '../../components/Layout/Layout'
import { useHistory } from 'react-router-dom'


const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgURL: '',
    content: '',
  })
  
  let history = useHistory()
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
    const res = await updatePost(id, post)
    console.log(res)
    history.push(`/posts/${id}`) 
  }

  

  return (
    <Layout user={props.user}>
      <form className='edit-form' onSubmit={handleSubmit}>
      <div className='post-edit'>
          
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          
        </div>
        
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
      
    </Layout>
  )
}

export default PostEdit