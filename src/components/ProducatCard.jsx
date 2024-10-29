import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProducatCard = ({title,price,rating,image}) => {
    const [value,setValue]=useState(4.5)
  return (
    <Card sx={{ maxWidth: 345 , cursor:'pointer' }} >
    <CardMedia
      sx={{ height: 250 }}
      image="https://picsum.photos/200"
      title="green iguana"
    />
    <CardContent >
    <Stack direction="row" spacing={1}>
              <Typography variant='h6' sx={{ fontWeight: 800, color: "blue" }}>
                Latest Ladies Trendy Watches
              </Typography>
              <Chip
                size="small"
                label="New"
                color="success"
                variant="contained"
              />
              </Stack>

      
      
            <Stack direction="row" spacing={15}>
              <Typography sx={{ fontWeight: 800, color: "secondary" }}>
                RS. 7640
              </Typography>
              <Rating name="read-only" value={value} readOnly precision={0.5} />
            </Stack>
     
    </CardContent>
   
    <CardActions>
    <Stack direction="row" spacing={2}>
    <Button variant='contained' color='success' size="medium">Buy Now</Button>
    <Button variant='contained' color='secondary' size="medium">Add to Cart</Button>
    <Button variant='contained' color='secondary' size="medium"><FavoriteIcon/></Button>
            </Stack>
     
    </CardActions>
  </Card>
  )
}

export default ProducatCard