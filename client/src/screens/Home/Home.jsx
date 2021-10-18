import './Home.css'
import  Layout from '../../components/Layout/Layout'
import SignUp from '../SignUp/SignUp'
import Footer from '../../components/Footer/Footer'


const Home = (props) => {

  const {setUser} = props
  props.setIsUser(false)
  
  return (
    
    <div className="home-container">
      <div className='home'>
        <div className="home-name"> <h1>The Office</h1></div>
        <div className="home-text"><p>A collection of literary works, in the works.</p></div>  
      </div>
        <SignUp setUser={setUser} />  
      <Footer/>
    </div>
  
  )
}

export default Home