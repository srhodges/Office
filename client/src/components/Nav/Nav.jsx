import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">The Office</NavLink>
            <div className="links">
              <NavLink className="link" to="/posts">Posts</NavLink>
              <NavLink className="link" to="/new-post">New Post</NavLink>
              <NavLink className="link" to="/sign-out">Sign Out</NavLink>
            
                </div>
            </div>
        </nav>
    )

}

export default Nav