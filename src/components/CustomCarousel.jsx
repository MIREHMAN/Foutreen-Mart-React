
import {
    
    Carousel,
  } from "react-bootstrap";
  import Banner1 from "../assets/cover.jpg";
  import Banner2 from "../assets/cover1.jpg";
  import Banner3 from "../assets/cover2.jpg";
 
  
function CustomCarousel () {
    return (
      <Carousel className="hero-carousel h-100">
        <Carousel.Item>
          <img
            src={Banner1}
            alt=""
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Banner2}
            alt=""
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Banner3}
            alt=""
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  export default CustomCarousel;