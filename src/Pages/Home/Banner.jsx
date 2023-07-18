import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner01 from "../../assets/banner/banner01.jpg"
import banner02 from "../../assets/banner/banner02.jpg"
import banner03 from "../../assets/banner/banner03.jpg"
import banner04 from "../../assets/banner/banner04.jpg"
import banner05 from "../../assets/banner/banner05.jpg"
import banner06 from "../../assets/banner/banner06.jpg"
import banner07 from "../../assets/banner/banner07.jpg"
import banner08 from "../../assets/banner/banner08.jpg"
import 'swiper/css/bundle'
import { useEffect, useState } from 'react';
import ParentCategories from '../../components/parentCategories';

const Banner = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() =>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='relative'>
            <Swiper
                
                modules={[Pagination, EffectFade, Autoplay]}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                      return `<span class="${className}" style="background-color: white;"></span>`;
                    },
                  }}
                effect={'fade'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className=''
            >

                <SwiperSlide className='bg-[#F85606]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner01} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#F85606]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner02} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#D3CDC0]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner03} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#D3CDC0]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner04} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#C2FFFA]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner05} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#ffe2ff]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner06} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#f2eee3]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner07} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#eeeff9]'>
                    <img className='w-[88%] ps-[240px] mx-auto' src={banner08} alt="" />
                </SwiperSlide>
            </Swiper>
            
            {/* ******************************* Category Section *****************************************  */}

            <div className='absolute top-0 left-24 z-10 flex justify-center items-center'>
                <div className='text-sm bg-white'>
                    {
                        categories.map(pCategory => <ParentCategories key={pCategory.id} pCategory={pCategory} ></ParentCategories>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;