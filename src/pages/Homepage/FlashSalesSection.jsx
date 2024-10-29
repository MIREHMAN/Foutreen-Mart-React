import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination, Button } from "react-bootstrap";
import ProducatCard from "../../components/ProducatCard";
import WImage from '../../assets/watch1.jpg'

function FlashSalesSection() {
  const [flashProducts, setFlashProducts] = useState([
    {
      id: 1,
      name: "Stylish Ladies Watch",
      price: 899,
      rating: 4.5,
      image : WImage
    },
  ]);
  
  const title = "Latest Ladies Watch";
  const price = 899;
  const rating = 3.5;
  return (
    <Container fluid className="mt-5">
      <Row className="mb-4">
        <Col xs={10}>
          <h1>Flash Sales</h1>
        </Col>
        <Col xs={2}>
          <div className="time-counter">00:00:00</div>
        </Col>
      </Row>
      <ProducatCard
        title={flashProducts[0].name}
        rating={flashProducts[0].rating}
        price={flashProducts[0].price}
        image={flashProducts[0].image}
      />

      <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
}

export default FlashSalesSection;
