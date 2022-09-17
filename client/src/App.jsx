import './App.scss';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate

} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route index path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route index path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {
          user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
