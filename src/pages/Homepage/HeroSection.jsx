

import { Container, Row, Col, Carousel, Image ,ListGroup, ListGroupItem} from 'react-bootstrap';
import Banner1 from './cover1.jpg';
import Banner2 from './cover.jpg';
import Banner3 from './cover2.jpg';

function HeroSection() {
  

  const ProductsList = () => {
    const products = [
      { id: 1, name: 'Product 1', image: 'https://picsum.photos/200', description: 'Description 1' },
      { id: 2, name: 'Product 2', image: 'https://picsum.photos/200', description: 'Description 2' },
      { id: 3, name: 'Product 3', image: 'https://picsum.photos/200', description: 'Description 3' },
      { id: 4, name: 'Product 4', image: 'https://picsum.photos/200', description: 'Description 4' },
      { id: 5, name: 'Product 5', image: 'https://picsum.photos/200', description: 'Description 5' },
      
     
    ];
  
    return (
      
            <ListGroup className='list-group'>
              <div className='animate-list'>
                {products.map((product) => (
                  <ListGroupItem key={product.id} style={{
                    marginBottom: '20px'
                  }}>
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
  

  return (

    <Container fluid className="hero-section">
    <Row className="align-items-center h-100">
      <Col sm={3} className="left-hero h-100">
      <ProductsList/>
      </Col>
      <Col sm={9} className="right-hero h-100">
        <Carousel className="hero-carousel h-100">
          {/* Carousel items */}
          <Carousel.Item>
            <img src={Banner1} alt="" style={{ objectFit: 'cover'}} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner2} alt="" style={{ objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner3} alt="" style={{ objectFit: 'cover'}} />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>


  );
}

export default HeroSection;