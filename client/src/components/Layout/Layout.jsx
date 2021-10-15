import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import UserNav from '../Nav/UserNav/UserNav'


const Layout = (props) => {
  
    const { posts, isUser, setSearchResult } = props  
      return (
      < div className = 'layout' >
    {isUser ? <UserNav setSearchResult={setSearchResult} posts={posts}/>  : <Nav /> }
        <div className="layout-children">
            {props.children}
        </div>
        <Footer />
  </div>
      )
      }

export default Layout