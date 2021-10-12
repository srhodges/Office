// call search in this component. Nav search post mvpimport { useState, useEffect } from 'react'
import './Posts.css'
import Search from '../../components/Search/Search'
import PostCard from '../../components/PostCard/PostCard'
import Layout from '../../components/Layout/Layout'
import { getPosts } from '../../services/posts'

const Posts = (props) => {

  const { searchResult, posts } = props
  
  // const [posts, setPosts] = useState([])
  // const [searchResult, setSearchResult] = useState([])
  

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const allPosts = await getPosts()
  //     setPosts(allPosts)
  //     setSearchResult(allPosts)
  //   }
  //   fetchPosts()
  // }, [])


  // const handleSearch = (event) => {
  //   event.preventDefault()
  //   const results = posts.filter((post) =>
  //     post.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   )
  //   setSearchResult(results)
  // }


  return (
    <Layout user={props.user}>
      {/* <Search handleSearch={handleSearch} /> */}
      <div className='posts'>
        {searchResult.map((post, index) => {
          return (
            <PostCard
              id={post._id}
              title={post.title}
              author={post.author}
              imgURL={post.imgURL}
              content={post.content}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Posts