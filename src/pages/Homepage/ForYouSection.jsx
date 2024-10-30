import React, { useState } from 'react';
import './CategoriesSection.css'
import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard";
import WImage from "../../assets/watch1.jpg";







const ForYouSection = () => {
   
    const [Products, setFlashProducts] = useState([
        {
          id: 1,
          name: "Stylish Ladies Watch",
          price: 899,
          rating: 4.5,
          image: WImage,
        },
        {
          id: 2,
          name: "Stylish Ladies Watch",
          price: 899,
          rating: 4.5,
          image: WImage,
        },
        {
          id: 3,
          name: "Stylish Ladies Watch",
          price: 899,
          rating: 4.5,
          image: WImage,
        },
        {
          id: 4,
          name: "Stylish Ladies Watch",
          price: 899,
          rating: 4.5,
          image: WImage,
        },
        {
          id: 5,
          name: "Stylish Ladies Watch",
          price: 899,
          rating: 4.5,
          image: WImage,
        },
      ]);

    return (
        <Grid container sx={{ m: {xs:1, md:3} }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4">For You</Typography>
            
          </Box>
        </Grid>
        <Grid container spacing={2}>
        {Products.map((product, index) => (
          <Grid
            key={product.id}
            item
            xs={6}
            md={3}
           
          >
            <ProductCard
              title={product.name}
              rating={product.rating}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
      </Grid>
    );
};

export default ForYouSection;