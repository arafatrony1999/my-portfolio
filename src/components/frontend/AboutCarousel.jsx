import Slider from "react-slick";
import { useExperienceContext } from "../../context/ExperienceContext";

const AboutCarousel = () => {
    const { experience } = useExperienceContext()

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
                {
                    experience.map((experience, index) => {
                        return(
                            <div key={index}>
                                <img src={experience.image} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default AboutCarousel