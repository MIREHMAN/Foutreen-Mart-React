import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import insight_img from './increase_img.png'

export default function DataCard(props) {
  return (
    <Card sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.value}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>{props.percentage} % increase</Typography>
        <CardMedia
          component="img"
          height="140"
          image={insight_img}
          alt="insights image"
        />
      </CardContent>
      
    </Card>
  );
}
