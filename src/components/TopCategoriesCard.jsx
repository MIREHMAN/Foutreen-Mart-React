import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import cameraImage from '../assets/camera.png';

const TopCategoriesCard = (backgroundColor='red') => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor,
        borderRadius: 2,
        overflow: 'hidden', 
      }}
    >
      <Box sx={{ m: 2, p:2,flex: 1 }}>
        <Stack spacing={1}> 
          <Typography variant="h6" sx={{ fontSize: {xs:'1rem', md:'1.5rem'}, fontWeight: '800', color: 'whitesmoke' }}>
            This is a Heading
          </Typography>
          <Typography sx={{ fontSize: {xs:'1rem', md:'1.5rem'}, fontWeight: {xs:'400', md:'500'}, color: 'whitesmoke' }}>
            This is a Paragraph or Description that also includes Promotion
          </Typography>
        </Stack>
        <Button size='small' variant="contained" color="success" sx={{ mt: 2 }}> 
          Shop Now
        </Button>
      </Box>
      <Box sx={{ margin: 'auto', marginRight: 2 }}>
        <img src={cameraImage} height={150} alt="Camera Image" /> 
      </Box>
    </Box>
  );
};

export default TopCategoriesCard;