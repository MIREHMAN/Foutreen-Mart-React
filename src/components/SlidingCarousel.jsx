
import { Box } from "@mui/material";
import { Carousel } from "react-bootstrap";

function CustomCarousel({ items }) {
  return (
    <Carousel indicators={false}  translate="yes">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
         
            <Box>
                {item.component}
            </Box>
          
        </Carousel.Item>
      ))}
      
    </Carousel>
  );
}

export default CustomCarousel;