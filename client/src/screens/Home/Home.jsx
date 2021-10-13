import './Home.css'
import  Layout from '../../components/Layout/Layout'
import SignUp from '../SignUp/SignUp'


const Home = (props) => {

  const {setUser} = props

  return (
    <div className="home-container">
      {/* <div className='home'> */}
        <div className="home-name"> <h1>The Office</h1></div>
        <div className="home-text"><p>A collection of literary works, in the works.</p></div>  
      {/* </div> */}
      <Layout user={props.user}>
        <SignUp setUser={setUser} />  
    </Layout>
    </div>
  )
}

export default Home