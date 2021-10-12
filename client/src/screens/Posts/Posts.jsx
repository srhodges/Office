// call search in this component. Nav search post mvpimport { useState, useEffect } from 'react'
import './Posts.css'
import PostCard from '../../components/PostCard/PostCard'
import Layout from '../../components/Layout/Layout'


const Posts = (props) => {

  const { searchResult, posts } = props


  return (
    <Layout user={props.user}>
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