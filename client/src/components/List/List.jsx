import './list.scss'
import ListItem from '../ListItem/ListItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const List = ({list}) => {
  return (
    <div className='List'>
       <span className="list-title">{list.title}</span> 
       <div className="wrapper">
       <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {list.content.map((item) => (
         <SwiperSlide><ListItem item={item} /></SwiperSlide> 
        ))}
        
      </Swiper> 
        </div>
    </div>
  )
}

export default List