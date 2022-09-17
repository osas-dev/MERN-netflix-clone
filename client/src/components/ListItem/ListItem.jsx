import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ListItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWJkODMxMjA4YWM2Yzk2NWM1NzkwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjk0MzUzMSwiZXhwIjoxNjYzMzc1NTMxfQ.yjRLRHlIRijxiKqH7VKqFgKkeGOywbh-i1VTBDciCyE"
          },
        });
        setMovie(res.data);

      } catch (err) {
        console.log(err)
      }
    };
    getMovie();
  }, [item])

  return (
    <Link to="/watch" state={{movie}} >
      <div className='list-item'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop></video>
            <div className="item-info">
              <div className="icons">
                <PlayArrowIcon className='icon' />
                <AddIcon className='icon' />
                <ThumbDownOffAltOutlinedIcon className='icon' />
                <ThumbUpOutlinedIcon className='icon' />
              </div>
              <div className="info-top">
                <span>{movie.duration}</span>
                <span className='limit'>{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem