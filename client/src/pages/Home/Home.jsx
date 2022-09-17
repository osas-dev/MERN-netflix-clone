import './home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import { useEffect, useState } from 'react'
import axios from "axios"

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type: ""}${genre ? "&genre=" + genre: ""}`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWJkODMxMjA4YWM2Yzk2NWM1NzkwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjk0MzUzMSwiZXhwIjoxNjYzMzc1NTMxfQ.yjRLRHlIRijxiKqH7VKqFgKkeGOywbh-i1VTBDciCyE"
          }
        });
        setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}

export default Home
