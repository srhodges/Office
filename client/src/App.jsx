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

const App = () => {
  const [user, setUser] = useState(null)
  const [updated, setUpdated] = useState(false)
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      console.log('hey', allPosts)
      setPosts(allPosts)
      setSearchResult(allPosts)
    }
    fetchPosts()
  }, [])



  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [updated])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/new-post">
          {user ? <PostCreate user={user} /> : <Redirect to="/sign-in" />}
        </Route>
        <Route exact path="/posts/:id/edit">
          {user ? <PostEdit user={user} setUpdated={setUpdated} updated={updated}  /> : <Redirect to='/sign-in' />}
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail user={user} />
        </Route>
        <Route exact path="/posts">
          <Posts posts={posts} user={user} searchResult={searchResult} setSearchResult={setSearchResult} />
        </Route>
      </Switch>
    </div>
  )
}

export default App