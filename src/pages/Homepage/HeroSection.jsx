import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Container,
  Row,
  Col,
  Carousel,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Banner1 from "../../assets/cover.jpg";
import Banner2 from "../../assets/cover1.jpg";
import Banner3 from "../../assets/cover2.jpg";
import { Chip } from "@mui/material";
import { useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";

export default function HeroSection() {
  const [products] = useState([
    {
      id: 1,
      name: "IPhone 16",
      image: "https://picsum.photos/200",
      price: 500,
      rating: 3,
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
      price: 500,
      rating: 3,
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
  const CustomCard = ({ rating, image, title, price, onClick }) => {
    const [value, setValue] = useState(rating);

    return (
      <Button onClick={onClick}>
        <Paper
          sx={{
            display: "flex",
            m: 0,
            p: 0,
            width: 300,
            justifyContent: "space-around",
            alignItems: "center",
            height: "100px",
            cursor: "pointer",
          }}
        >
          <Box>
            <img src={image} style={{ height: "70px" }} alt={title} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "left", fontWeight: 700 }}
            >
              {title}
            </Typography>
            <Rating name="read-only" value={value} readOnly precision={0.5} />
            <Stack direction="row" spacing={2}>
              <Typography sx={{ fontWeight: 800, color: "blue" }}>
                RS. {price}
              </Typography>
              <Chip
                size="small"
                label="New"
                color="success"
                variant="contained"
              />
            </Stack>
          </Box>
        </Paper>
      </Button>
    );
  };


  const CustomCarousel = () => {
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
            <CustomCarousel />
          </Grid>
          <Typography variant="h4" sx={{ textAlign: "center", mt: 2 }}>
            Latest Updates
          </Typography>
          <Grid item xs={12} md={12}>
            <Grid container spacing={2}>
              {products.length > 0 && (
                <React.Fragment>
                  <Button onClick={handlePrev}>&lt;</Button>
                  <CustomCard
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
