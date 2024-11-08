import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const ProductCard = ({ title, price, rating, image }) => {
  return (
    <Card sx={{ width: {xs:"100%", md:'100%'}, height: "100%", cursor: "pointer", py: {xs:0, md:2} }}>
      
      <CardMedia
        sx={{ height: { xs: 100, md: 250 }, width: "50%", margin:'auto' }}
        image={image}
        title={title}
      />

      {/* Card Contents for desktop View */}

      <CardContent sx={{ display: { xs: "none", md: "block" } }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "blue" }}>
            {title}
          </Typography>
          <Chip size="small" label="New" color="success" variant="contained" />
        </Stack>

        <Stack direction="row" spacing={15}>
          <Typography sx={{ fontWeight: 800, color: "secondary" }}>
            RS. {price}
          </Typography>
          <Rating name="read-only" value={rating} readOnly precision={0.5} />
        </Stack>
      </CardContent>

      {/* Card Contents for Mobile View */}

      <CardContent sx={{ display: { xs: "block", md: "none" } }}>
        <Stack direction="row" spacing={1}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "blue", fontSize: "small" }}
          >
            {title}
          </Typography>
        </Stack>

        <Stack spacing={0.5}>
          <Stack direction="row" spacing={5}>
            <Typography
              sx={{ fontWeight: 600, color: "secondary", fontSize: "small" }}
            >
              RS. {price}
            </Typography>
           
          </Stack>
          <Rating name="read-only" value={rating} readOnly precision={0.5} sx={{fontSize:'1rem'}}/>
        </Stack>
      </CardContent>

      {/* Card Actions for Mobile View */}

      <CardActions sx={{ display: { xs: "block", md: "none" } }}>
        <Stack spacing={1}>
          <Button variant="contained" color="success" size="small" sx={{fontSize:'0.5rem'}}>
            Buy Now
          </Button>
          <Stack direction="row" spacing={0.5}>
            <Button variant="contained" color="secondary" size="small" sx={{fontSize:'0.5rem'}}>
              Add to Cart
            </Button>
           
            <Checkbox size="small" sx={{fontSize:'0.3rem'}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            
          </Stack>
        </Stack>
      </CardActions>

      
      {/* Card Actionss for desktop View */}
      
      
      <CardActions sx={{ display: { xs: "none", md: "block" } }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" size="medium">
            Buy Now
          </Button>
          <Button variant="contained" color="secondary" size="medium">
            Add to Cart
          </Button>
          <Checkbox size="medium" sx={{fontSize:'0.5rem'}} icon={<FavoriteBorder />} checkedIcon={<Favorite color="warning" />} />
            
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
