import axios from 'axios'
import { useQuery } from 'react-query'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import './Categories.css'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


function Categories() {
const getCategories = async()=>{
  const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=100`)
  return data
}
const {data,isLoading} =useQuery('web_categories',getCategories)


if(isLoading){
  return <p>...loading</p>
}
  return (
    // <div className='container'>
    //   <div className="row">
    //     { categories.length>0?
    //       categories.map((category)=>
    //       <div className='col-lg-4' key={category._id}>
    //         <img src={category.image.secure_url} alt="" />
    //         <h2>{category.name}</h2>
    //       </div>
    //     ):'no category found'}
    //   </div>
    // </div>
    <div className='container '>
      <div className=".swiper-custom-pagination"></div>
    <Swiper
     modules={[Navigation, Pagination,Autoplay ]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      loop={true}
      autoplay={
        {
          delay:10000,
        }
      }
      pagination={
        {
          clickable:true,
         // el:'.swiper-custom-pagination'
        }
      }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.categories.length ? data?.categories.map( (category)=>
      <SwiperSlide key={category._id}>
        <Link to={`/products/category/${category._id}`}>
        <div className="category">
        <img src={category.image.secure_url} className='rounded-circle'/>
        <h2 className='fs-5'>{category.name}</h2>
        </div>
        </Link>
      </SwiperSlide>
      ):'<h2>no category found</h2>'}
    </Swiper>
{/* 
      <div className="row">
      {data?.categories.length ? data?.categories.map( (category)=>
      <div className='col-lg-4' key={category._id}>
        <img src={category.image.secure_url}/>
        <h2>{category.name}</h2>
      </div>
      ):'<h2>no data found</h2>'}
      </div> */}
    </div>
  )
}
export default Categories