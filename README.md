# The Office

## Overview

This application will serve as a blog site where user can create posts and browse others.

<br>

## Wireframes

https://whimsical.com/the-office-AXyDXxw7bBf3pSyJAwoRJM <br>
https://www.figma.com/file/Ti94Lhxehxm23D7hFtwtJr/The-Office?node-id=2%3A4

<br>

## MVP

- Successfully create and render external api
- Successfully allow user to add posts 
- Successfully route to all pages
- Make it look nice!

## PostMVP

- Allow uers to search posts 

<br>

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.


| Day           | Deliverable                                        | Status     |
| ------------- | -------------------------------------------------- | ---------- |
|Oct 7th | Prompt / Wireframes / Timeframes                           | Complete |
|Oct 8th | Project Approval                                           | Complete |
|Oct 10th | Backend Logic                                             | Complete |
|Oct 11th | Clickable Express Model                                   | Complete |
|Oct 12th | Connect MongoDB, Heroku                                   | Complete |
|Oct 13th | CSS                                                       | Complete |
|Oct 14th | CSS                                                       | Complete |
|Oct 15th | MVP                                                       | Complete |
|Oct 18th | Presentations                                             | Complete |

<br>

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Figma/Component Hier|    H     |     6 hrs      |     6 hrs     |     hrs    |
| Backend Auth Logic  |    H     |     4 hrs      |     4 hrs     |     hrs    |
| Routes and Layout   |    H     |     6 hrs      |     5 hrs     |     hrs    |
| React App           |    H     |     6 hrs      |     6 hrs     |     hrs    |
| CSS                 |    H     |     8 hrs      |     8 hrs     |     hrs    |
| Total               |          |     30 hrs     |     29 hrs    |     hrs    |

<br>

## Code Snippet

```
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
      <Layout user={user} isUser={isUser} posts={posts} setSearchResult={setSearchResult}>

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

```
<br>

## SWOT Analysis

### Strengths:

Cemented principles of useState, props, params.

### Weaknesses:

Still gaining knowledge in backend auth.

### Opportunities:

Working on styling was informative and enjoyable this go around with the experience I've gained. 

### Threats:

Time! Lots to do, but I'm getting stronger at assessing how long each task should take and completing it in the allotted time.

