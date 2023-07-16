import { register } from 'swiper/element/bundle';
import banner01 from "../../assets/banner/banner01.jpg"
import banner02 from "../../assets/banner/banner02.jpg"
import banner03 from "../../assets/banner/banner03.jpg"
import banner04 from "../../assets/banner/banner04.jpg"
import banner05 from "../../assets/banner/banner05.jpg"
import banner06 from "../../assets/banner/banner06.jpg"
import banner07 from "../../assets/banner/banner07.jpg"
import banner08 from "../../assets/banner/banner08.jpg"
import "swiper/element/css/effect-fade"

register();

const Banner = () => {
    return (
        <div>
            <swiper-container autoplay="true" pagination="true" loop="true" effect-fade>
                <swiper-slide>
                    <img src={banner01} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner02} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner03} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner04} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner05} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner06} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner07} alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src={banner08} alt="" />
                </swiper-slide>
                
            </swiper-container>
        </div>
    );
};

export default Banner;