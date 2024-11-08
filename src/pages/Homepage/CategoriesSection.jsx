import React, { useState } from 'react';
import './CategoriesSection.css'
import Grid from '@mui/material/Grid2';
import Box from "@mui/material/Box";
import cameraImage from '../../assets/camera.png';
import Typography from "@mui/material/Typography";
import SlidingCarousel from '../../components/SlidingCarousel'
import CustomCategoryCard from "../../components/CustomCategoryCard";
import { Stack } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


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
    
   

    return (
      <Stack direction="column" spacing={2} sx={{ m: { xs: 1, md: 3 } }}>
      <Typography variant="h4">Categories</Typography>
      <Marquee pauseOnHover={true} gradient={true} gradientWidth={30} speed={30}>
        {categories && categories.map((category) => (
          <Stack key={category.id} direction="row" spacing={1}>
            <CustomCategoryCard
              image={category.icon}
              title={category.name}
              
            />
          </Stack>
        ))}
      </Marquee>
    </Stack>
    );
};

export default CategoriesSection;