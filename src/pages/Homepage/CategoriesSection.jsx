import React, { useState } from 'react';
import './CategoriesSection.css'
import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";
import cameraImage from '../../assets/camera.png';
import Typography from "@mui/material/Typography";
import SlidingCarousel from '../../components/SlidingCarousel'
import CustomCategoryCard from "../../components/CustomCategoryCard";


const CategoriesSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + categories.length) % categories.length);
  };
    const categories = [
        { name: 'Food', icon: cameraImage },
        { name: 'Drink', icon: cameraImage }, 
        { name: 'Body', icon: cameraImage }, 
        { name: 'Bicycle', icon: cameraImage }, 
        { name: 'Building', icon: cameraImage }, 
        { name: 'Camera', icon: cameraImage }, 
        { name: 'Electronics', icon: cameraImage }, 
        { name: 'Fashion', icon: cameraImage }, 
        { name: 'Home', icon: cameraImage }, 
        { name: 'Sports', icon: cameraImage }, 
        { name: 'Toys', icon: cameraImage }, 
        { name: 'Travel', icon: cameraImage}, 
    ];
    const createCategoryCard = (categories, index) => ({
      key: index,
      component: (
        <CustomCategoryCard
          
          image={categories.icon}
          title={categories.name}
          
        />
      ),
    });
    
    const categoryCarouselItems = categories.map(createCategoryCard);
   

    return (
        <Grid container sx={{ m: {xs:1, md:3} }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4">Categories</Typography>
          </Box>
          <Grid item xs={12} md={12}>
          <SlidingCarousel items={categoryCarouselItems} />
          </Grid>
        </Grid>
        
      </Box>
      </Grid>
    );
};

export default CategoriesSection;