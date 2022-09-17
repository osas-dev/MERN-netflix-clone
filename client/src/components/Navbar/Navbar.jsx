import './navbar.scss'
import Logo from '../../assets/netflix-logo.png'
import Search from '@mui/icons-material/Search'
import Notifications from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '../../assets/avatar1.jpg'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {

  const [isScrolled, setIsScolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
          <Link to="/" className='link'><span>Homepage</span></Link>
          <Link to="/movies" className='link'><span className='navbarmainLinks'>Movies</span></Link>
          <Link to="/series" className='link'><span className='navbarmainLinks'>Series</span></Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={Avatar} alt="" />

          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())} >Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
