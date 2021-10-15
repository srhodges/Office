import './UserNav.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../../SearchBar/SearchBar'


const UserNav = (props) => {

  const { posts, setSearchResult } = props

    return (
      <nav>
        <div className="user-nav-box">
           
                <NavLink className="user-nav-logo" to="/">The Office</NavLink>
            <div className="user-nav-link-box">
              <NavLink className="user-nav-link" to="/posts">Home</NavLink>
              <NavLink className="user-nav-link" to="/new-post">New Post</NavLink>
              <NavLink className="user-nav-link" to="/sign-out">Sign Out</NavLink>
          </div>
          <SearchBar className="search-bar" posts={posts} setSearchResult={setSearchResult}/>
            </div>
        </nav>
    )

}

export default UserNav