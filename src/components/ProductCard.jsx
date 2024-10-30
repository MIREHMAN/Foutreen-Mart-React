import React from 'react'
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

const ProductCard = ({title,price,rating,image}) => {
    
  return (
    <Card sx={{ width: '100%' , height:420, cursor:'pointer' , py:2}} >
    <CardMedia
      sx={{ height: 250 }}
      image={image}
      title={title}
    />
    <CardContent >
    <Stack direction="row" spacing={1}>
              <Typography variant='h6' sx={{ fontWeight: 800, color: "blue" }}>
                {title}
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
                RS. {price}
              </Typography>
              <Rating name="read-only" value={rating} readOnly precision={0.5} />
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

export default ProductCard