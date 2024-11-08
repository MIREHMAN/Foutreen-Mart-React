import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import CustomProductCard from "../../components/CustomProductCard";
import CustomCarousel from "../../components/CustomCarousel";
import SlidingCarousel from "../../components/SlidingCarousel";
import { Container, Carousel, Stack } from "react-bootstrap";
import Banner1 from "../../assets/cover.jpg";
import Banner2 from "../../assets/cover1.jpg";
import Banner3 from "../../assets/cover2.jpg";
import Marquee from "react-fast-marquee";

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
  ];

  return (
    <Container fluid>
  <Stack direction="column" spacing={2}>
    <CustomCarousel items={images} />
    <Typography variant="h5" textAlign="center" mb={2}>
      Latest Updates
    </Typography>

    <Marquee pauseOnHover={true} gradient={true} gradientWidth={30} speed={30}>
    {products && products.map((product) => (
      <Stack key={product.id} direction="row" spacing={1}>
        <CustomProductCard
          rating={product.rating}
          image={product.image}
          title={product.name}
          price={product.price}
        />
      </Stack>
    ))}
     </Marquee>
  </Stack>
</Container>
  );
}
