import './login.scss'
import Logo from '../../../assets/netflix-logo.png'
import { useContext, useState } from 'react'
import { login } from '../../../authContext/apiCalls';
import { AuthContext } from '../../../authContext/AuthContext';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch)
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className='logo' src={Logo} alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <div className="input-grp">
            <input type="email" placeholder='Email or Phone number' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-grp">
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="btn">
            <button className='login-btn' onClick={handleLogin}>Sign In</button>
          </div>

          <span>
            New to Netflix <b>Sign up now</b>.
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login