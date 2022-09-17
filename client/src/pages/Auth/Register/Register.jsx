import './register.scss'
import Logo from '../../../assets/netflix-logo.png'
import { useState } from 'react'
import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

        try {
           await axios.post("auth/register", { email, username, password });
        history.push("/login") 
        } catch (err) {
            
        }
        
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src={Logo} alt="" />
                    <button className="login-btn">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder='Email address' ref={emailRef} />
                            <button className="register-btn" onClick={handleStart}>
                                Get started
                                <div className="icon"><ArrowForwardIosRoundedIcon /></div>
                            </button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="username" placeholder='username' ref={usernameRef} />
                            <input type="password" placeholder='Password' ref={passwordRef} />
                            <button className="register-btn" onClick={handleFinish}>Start</button>

                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Register