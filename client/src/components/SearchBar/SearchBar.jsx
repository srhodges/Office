import React from 'react'
import { useState } from 'react';


function SearchBar(props) {

  const {setSearchResult, posts} = props

  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (searchInput) => {
    const results = posts.filter((post) =>
      post.title.toLowerCase() === searchInput || post.author.toLowerCase() === searchInput || post.content.toLowerCase() === searchInput
    )
    console.log("this one", results)
    setSearchResult(results)
  }
  
  return (
    <div>
    
    <div className="search-results">
      <input type="text" placeholder="Search" onChange={e => handleSearch(e.target.value)} />
      <button className="search-button"> Search</button>
      </div>
    </div>
          );
        }
      

export default SearchBar