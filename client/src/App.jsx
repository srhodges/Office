import { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import { getPosts } from './services/posts'
import Layout from './components/Layout/Layout'

const App = () => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isCreated, setCreated] = useState(false)
  const [isDeleted, setDeleted] = useState(false)
const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      console.log('hey', allPosts)
      setPosts(allPosts)
      setSearchResult(allPosts)
    }
    fetchPosts()
  }, [isCreated, isDeleted])



  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="app">
      <Layout user={user} isUser={isUser} posts={posts}>

      <Switch>
        <Route exact path="/">
          <Home setIsUser={setIsUser} user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/sign-in">
          <SignIn setIsUser={setIsUser} setUser={setUser} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/new-post">
            {user ? <PostCreate setIsUser={setIsUser} setCreated={setCreated} user={user} /> : <Redirect to="/sign-in" />}
        </Route>
        <Route exact path="/posts/:id/edit">
          {user ? <PostEdit setIsUser={setIsUser} user={user}  /> : <Redirect to='/sign-in' />}
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail setIsUser={setIsUser} setDeleted={setDeleted} user={user} />
        </Route>
        <Route exact path="/posts">
          <Posts setIsUser={setIsUser} posts={posts} user={user} searchResult={searchResult} setSearchResult={setSearchResult} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut />
        </Route>
      </Switch>
      </Layout>
    </div>
  )
}

export default App