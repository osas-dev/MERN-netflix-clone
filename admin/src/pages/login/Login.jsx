import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/authContext/AuthContext"
import { login } from "../../context/authContext/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  }
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="input-group">
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button
          onClick={handleLogin}
          disabled={isFetching}
          >Login</button>
      </form>
    </div>
  )
}


export default Login