import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import CustomProductCard from "../../components/CustomProductCard";
import CustomCarousel from "../../components/CustomCarousel";
import SlidingCarousel from "../../components/SlidingCarousel";
import { Container, Carousel } from "react-bootstrap";
import Banner1 from "../../assets/cover.jpg";
import Banner2 from "../../assets/cover1.jpg";
import Banner3 from "../../assets/cover2.jpg";


export default function HeroSection() {
  const images = [Banner1, Banner2, Banner3];
  const products = [
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
  ]

  const createProductCard = (product, index) => ({
    key: index,
    component: (
      <CustomProductCard
        rating={product.rating}
        image={product.image}
        title={product.name}
        price={product.price}
      />
    ),
  });
  
  const productCarouselItems = products.map(createProductCard);

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
          <CustomCarousel items={images} />
          </Grid>
          <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>
            Latest Updates
          </Typography>
          <Grid item xs={12} md={12}>
          <SlidingCarousel items={productCarouselItems} />
           
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
