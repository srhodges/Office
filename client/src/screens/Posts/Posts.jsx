// call search in this component. Nav search post mvpimport { useState, useEffect } from 'react'
import './Posts.css'
import PostCard from '../../components/PostCard/PostCard'
import Layout from '../../components/Layout/Layout'
import SearchBar from '../../components/SearchBar/SearchBar'



const Posts = (props) => {


  const { posts, searchResult, setSearchResult } = props
  


  return (
    <Layout user={props.user}>
      <div className='posts'>
        <h1 className='browse-categories'>Browse Categories</h1>

        <div className="category-container">
        <div className="category-box"> 
          {/* <CategoryCard/> */}
          <h2>Cat</h2>
          <h2>Cat</h2>
          <h2>Cat</h2>
          <h2>Cat</h2>
          <h2>Cat</h2>
          <h2>Cat</h2>
        </div>
          </div>

        <h1 className='featured-works'>Featured Works</h1>
        <div className="featured-container">
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
          <SearchBar posts={posts} setSearchResult={setSearchResult}/>
      </div>
    </Layout>
  )
}

export default Posts