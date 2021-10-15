
import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      console.log("sign up" , user)
      setUser(user)
      history.push('/posts')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Welcome New User!',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <div className='form-container'>
      <h3>Join The Office</h3>
      <form onSubmit={onSignUp}>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
        />
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
        />
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        {/* <input
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
        /> */}
        {renderError()}
      </form>
      <p>
      Already Have An Account? Sign In <Link to="./sign-in">Here</Link>
      </p>
    </div>
  )
}

export default SignUp