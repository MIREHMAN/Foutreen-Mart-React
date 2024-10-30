import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import WImage from "../../assets/watch1.jpg";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function FlashSalesSection() {
  const [flashProducts, setFlashProducts] = useState([
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
      <Box sx={{display:'flex', flexDirection:'column'}}>

      
      <Grid item xs={12}>
        <Box sx={{display:'flex'}}>
        <Typography variant="h5">Flash Sales</Typography>
        <Typography variant="caption">00:00:00</Typography>
        </Box>
       
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <ProductCard
            title={flashProducts[0].name}
            rating={flashProducts[0].rating}
            price={flashProducts[0].price}
            image={flashProducts[0].image}
          />
        
        </Grid>
        <Grid item xs={6} md={3}>
          <ProductCard
            title={flashProducts[0].name}
            rating={flashProducts[0].rating}
            price={flashProducts[0].price}
            image={flashProducts[0].image}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ProductCard
            title={flashProducts[0].name}
            rating={flashProducts[0].rating}
            price={flashProducts[0].price}
            image={flashProducts[0].image}
          />
          
        
        </Grid>
        <Grid item xs={6} md={3}>
          <ProductCard
            title={flashProducts[0].name}
            rating={flashProducts[0].rating}
            price={flashProducts[0].price}
            image={flashProducts[0].image}
          />
          
        
        </Grid>
      </Grid>
      </Box>
    </Grid>
  );
}

export default FlashSalesSection;
