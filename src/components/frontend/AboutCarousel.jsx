import Slider from "react-slick";
import ad1 from '../../assets/images/ad1.png'
import ad2 from '../../assets/images/ad2.png'
import ad3 from '../../assets/images/ad3.png'
import ad4 from '../../assets/images/ad4.png'
import ad6 from '../../assets/images/ad6.png'
import ad7 from '../../assets/images/ad7.png'
import ad8 from '../../assets/images/ad8.png'
import ad9 from '../../assets/images/ad9.png'
import ad10 from '../../assets/images/ad10.png'

const AboutCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    };
    
    return (
        <div style={{height: '100px'}} className="about-carousel w-100 overflow-hidden py-2">
            <Slider {...settings}>
                <div>
                    <img src={ad1} alt="" />
                </div>
                <div>
                    <img src={ad2} alt="" />
                </div>
                <div>
                    <img src={ad3} alt="" />
                </div>
                <div>
                    <img src={ad4} alt="" />
                </div>
                <div>
                    <img src={ad6} alt="" />
                </div>
                <div>
                    <img src={ad7} alt="" />
                </div>
                <div>
                    <img src={ad8} alt="" />
                </div>
                <div>
                    <img src={ad9} alt="" />
                </div>
                <div>
                    <img src={ad10} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default AboutCarousel