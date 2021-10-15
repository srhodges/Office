// call search in this component. Nav search post mvpimport { useState, useEffect } from 'react'
import './Posts.css'
import PostCard from '../../components/PostCard/PostCard'
import Layout from '../../components/Layout/Layout'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'



const Posts = (props) => {


  const { posts, searchResult, setSearchResult } = props
  
  props.setIsUser(true)

  return (
 
      <div className='posts'>
        <div className="category-container">
        <h1 className='browse-categories'>Browse Categories</h1>

        <div className="category-box"> 
            <div className="link-box">
            <Link className="cat-link">Shorts</Link>
            <Link className="cat-link">Words That Spell Things</Link>
            <Link className="cat-link">Comics</Link>
            <Link className="cat-link">Financial</Link>
            <Link className="cat-link">Excerpts</Link>
            <Link className="cat-link">Travel</Link>
            <Link className="cat-link">Learn Something New</Link>
          </div>
        </div>
          </div>

        <div className="featured-container">
          <h1 className='featured-works'>Featured Works</h1>
          <div className="featured-box">

        <div className="featured">

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
          </div>
          {/* <SearchBar classname="search-bar" posts={posts} setSearchResult={setSearchResult}/> */}
          </div>
      </div>
    
  )
}

export default Posts