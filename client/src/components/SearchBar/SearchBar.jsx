import { lowerCase } from 'lodash';
import React from 'react'
import { useState } from 'react';
import './SearchBar.css'


function SearchBar(props) {

  const {setSearchResult, posts} = props


  const handleSearch = (searchInput) => {
    const lowerCaseInput = searchInput.toLowerCase()
    console.log("posts", posts)
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(lowerCaseInput)  || post.author.toLowerCase().includes(lowerCaseInput) || post.content.toLowerCase().includes(lowerCaseInput)   )
    console.log("this one", results)
    setSearchResult(results)
  }
  
  return (
    <div className="search-results">
      <input type="text" placeholder="Search" onChange={e => handleSearch(e.target.value)} />
      {/* <button className="search-button"> Search</button> */}
      </div>
          );
        }
      

export default SearchBar