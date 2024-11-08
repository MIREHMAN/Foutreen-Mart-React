import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from 'react-bootstrap';

const PromotionalProductCard = ({ title, price,  image }) => {
  return (
    <Button  sx={{ padding: 0, mx:2 }}>
      <Card
        sx={{
          width: { xs: '100%', md: '100%' },
          height: '100%',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        <CardMedia
          sx={{ height: { xs: 120, md: 200 }, width: '100%', objectFit: 'contain' }}
          image={image}
          title={title}
        />

        <CardContent  sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'blue' }}>
            {title}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Typography sx={{ fontWeight: 800, color: 'secondary' }}>
              RS. {price}
            </Typography>
            
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
          
        </Stack>
      </CardContent>

      </Card>
    </Button>
  );
};

export default PromotionalProductCard;