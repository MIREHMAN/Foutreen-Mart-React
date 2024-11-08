import React from 'react'
import PromotionalProductCard from '../../components/PromotionalProductCard'
import { Container, Stack } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const PromotionalProductsSection = () => {
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
        {
            id: 6,
            name: "IPhone 16",
            image: "https://picsum.photos/200",
            price: 100500,
            rating: 4.5,
          },
          {
            id: 7,
            name: "IPhone 16",
            image: "https://picsum.photos/200",
            price: 500,
            rating: 3,
          },
          {
            id: 8,
            name: "IPhone 16",
            image: "https://picsum.photos/200",
            price: 500,
            rating: 3,
          },
      ];
  return (
    <Container fluid>
    
      <Marquee pauseOnHover={true} gradient={true} gradientWidth={30} speed={40}>
      {products && products.map((product) => (
        <Stack key={product.id} direction="row" spacing={4}>
          <PromotionalProductCard
            image={product.image}
            title={product.name}
            price={product.price}
          />
        </Stack>
      ))}
       </Marquee>
    
  </Container>
  )
}

export default PromotionalProductsSection