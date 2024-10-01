import React from 'react';
import './CategoriesSection.css'
import { Container, Row, Col, Pagination, Button, Card } from 'react-bootstrap';
import { IoFastFoodOutline } from "react-icons/io5";

const categories = [
    { name: 'Food', icon: <IoFastFoodOutline size={50} /> },
    { name: 'Drink', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Body', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Bicycle', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Building', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Camera', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Electronics', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Fashion', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Home', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Sports', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Toys', icon: <IoFastFoodOutline size={50} /> }, 
    { name: 'Travel', icon: <IoFastFoodOutline size={50} /> }, 
];

const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 12.99 },
    { id: 4, name: 'Product 4', price: 11.99 },
    { id: 5, name: 'Product 5', price: 13.99 },
    { id: 6, name: 'Product 6', price: 14.99 },
];

const ProductCard = ({ product }) => {
    const image = 'https://picsum.photos/200';
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="d-flex justify-content-between">
                    <span>Price: ${product.price}</span>
                    <span>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </span>
                </Card.Text>
                <Button className="me-2">Buy Now</Button>
                <Button className="me-2">Add to Cart</Button>
                <Button>
                    <i class="bi bi-heart"></i>
                </Button>
            </Card.Body>
        </Card>

    );
};

const CategoriesSection = () => {

    return (
        <Container fluid className="mt-5">
            <Row className='mb-4'>

                <Col xs={12}>
                    <h1>Categories</h1>
                </Col>
                
            </Row>
            <Row className="categories-row">
                {categories.slice(0, 6).map((category, index) => (
                    <Col key={index} xs={2}>
                        <div className="category-box">
                            <div className="icon-box">
                                {category.icon}
                            </div>
                            <span>{category.name}</span>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row className="categories-row">
                {categories.slice(6, 12).map((category, index) => (
                    <Col key={index} xs={2}>
                        <div className="category-box">
                            <div className="icon-box">
                                {category.icon}
                            </div>
                            <span>{category.name}</span>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                {products.map((product, index) => (
                    <Col key={index} xs={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </Container>
    );
};

export default CategoriesSection;