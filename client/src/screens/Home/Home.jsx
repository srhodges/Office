import './Home.css'
import  Layout from '../../components/Layout/Layout'
import SignUp from '../SignUp/SignUp'


const Home = (props) => {

  const {setUser} = props

  return (
    <Layout user={props.user}>
      <div className='home'>
        
        <SignUp setUser={setUser} />
        
      </div>
    </Layout>
  )
}

export default Home