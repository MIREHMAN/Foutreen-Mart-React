import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import CustomProductCard from "../../components/CustomProductCard";
import {
  Container,
  Carousel,
} from "react-bootstrap";

import { useState } from "react";

export default function HeroSection() {
  const [products] = useState([
    {
      id: 1,
      name: "Canon Camera",
      image: "https://picsum.photos/200",
      price: 25000,
      rating: 4,
    },
    {
      id: 2,
      name: "Ladies Watch",
      image: "https://picsum.photos/200",
      price: 390,
      rating: 4.5,
    },
    {
      id: 3,
      name: "IPhone 16",
      image: "https://picsum.photos/200",
      price: 100500,
      rating: 4.5,
    },
    {
      id: 4,
      name: "IPhone 16",
      image: "https://picsum.photos/200",
      price: 500,
      rating: 3,
    },
    {
      id: 5,
      name: "IPhone 16",
      image: "https://picsum.photos/200",
      price: 500,
      rating: 3,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };



  
  return (
    <Container fluid className="hero-section">
      <Grid container spacing={2}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            
          </Grid>
          <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>
            Latest Updates
          </Typography>
          <Grid item xs={12} md={12}>
            <Grid container spacing={2}>
              {products.length > 0 && (
                <React.Fragment>
                  <Button size="small" sx={{width:'10px'}} onClick={handlePrev}>&lt;</Button>
                  <CustomProductCard
                    rating={products[currentIndex].rating}
                    image={products[currentIndex].image}
                    title={products[currentIndex].name}
                    price={products[currentIndex].price}
                  />
                  <Button onClick={handleNext}>&gt;</Button>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
