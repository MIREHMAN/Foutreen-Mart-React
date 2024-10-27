import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
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

function HeroSection() {
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
      <Paper sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
          }}
        >
         
            <Grid item xs={12} md={3}>
              <ProductsList />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomCarousel/>
            </Grid>
          
        </Box>
        </Grid>
      </Paper>
    </Container>
  );
}

export default HeroSection;
