import React, { useState } from 'react';
import './CategoriesSection.css'
import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard";
import { IoFastFoodOutline } from "react-icons/io5";
import WImage from "../../assets/watch1.jpg";







const CategoriesSection = () => {
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
        <Grid container sx={{ m: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4">Categories</Typography>
            
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

export default CategoriesSection;