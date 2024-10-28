import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from '@mui/material/Rating';
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

export default function HeroSection() {
  const CustomCard = ({ rating, image, title, price, onClick }) => {
    const [value, setValue] = useState(rating);
  
    return (
      <Button onClick={onClick}>
      <Paper
        sx={{
          display: 'flex',
          m: 0,
          p: 0,
          width: 300,
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100px',
          cursor: 'pointer'
        }}
        
      > 
        <Box>
          <img src={image} style={{ height: '70px' }} alt={title} />
        </Box>
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Rating name="read-only" value={value} readOnly precision={0.5} />
          <Stack direction="row" spacing={2}>
            <Typography sx={{ fontWeight: 800 }}>RS. {price}</Typography>
            <Chip label="New" color="success" variant="contained" />
          </Stack>
        </Box>
        
      </Paper>
      </Button>
    );
  };
  const ProductsList = () => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        image: "https://picsum.photos/200",
        description: "Description 1",
      },
      {
        id: 2,
        name: "Product 2",
        image: "https://picsum.photos/200",
        description: "Description 2",
      },
      {
        id: 3,
        name: "Product 3",
        image: "https://picsum.photos/200",
        description: "Description 3",
      },
      {
        id: 4,
        name: "Product 4",
        image: "https://picsum.photos/200",
        description: "Description 4",
      },
      {
        id: 5,
        name: "Product 5",
        image: "https://picsum.photos/200",
        description: "Description 5",
      },
    ];

    return (
      <ListGroup className="list-group">
        <div className="animate-list">
          {products.map((product) => (
            <ListGroupItem
              key={product.id}
              style={{
                marginBottom: "20px",
              }}
            >
              <Row>
                <Col md={2}>
                  <Image src={product.image} fluid />
                </Col>
                <Col md={10}>
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </div>
      </ListGroup>
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
          <Paper sx={{ p: 2, mt: 2 }}>
            <Grid item xs={12} md={12}>
              <CustomCard />
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
}


