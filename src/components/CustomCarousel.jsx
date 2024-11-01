
import { Carousel } from "react-bootstrap";

function CustomCarousel({ items }) {
  return (
    <Carousel className="hero-carousel h-100">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
         
            <img 
              src={item} 
              alt="" 
              style={{ objectFit: "cover", width: "100%" }} 
            />
          
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;