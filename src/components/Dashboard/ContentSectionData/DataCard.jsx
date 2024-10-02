import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function DataCard() {
  return (
    <Card sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Total Users
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="top-product"
        />
        <Typography variant="h5" component="div">
          14
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>5% increase</Typography>
      </CardContent>
      
    </Card>
  );
}
