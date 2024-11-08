import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import cameraImage from '../assets/camera.png';
import { Box, Typography } from '@mui/material';

const TopCategoriesCardRoot = styled(Box)(({ theme, backgroundColor }) => ({
  display: 'flex',
  width: '100%',
  backgroundColor,
  borderRadius: 2,
  overflow: 'hidden',
}));

const Content = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  flex: 1,
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '1rem', md: '1.5rem' },
  fontWeight: '800',
  color: 'whitesmoke',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '0.7rem', md: '1.2rem' },
  fontWeight: { xs: '400', md: '500' },
  color: 'whitesmoke',
  lineHeight: { xs: '16px', md: '24px' },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  margin: 'auto',
  marginRight: theme.spacing(2),
  
}));

const TopCategoriesCard = ({ backgroundColor = 'red' }) => {
  return (
    <TopCategoriesCardRoot backgroundColor={backgroundColor}>
      <Content>
        <Stack spacing={1}>
          <Heading>Short Heading</Heading>
          <Description>
            Short Promotional Paragraph
          </Description>
        </Stack>
        <Button
          size="small"
          variant="contained"
          color="success"
          sx={{ mt: { md: 2, xs: 1 }, fontSize: '0.6rem' }}
        >
          Shop Now
        </Button>
      </Content>
      <ImageContainer>
        <img src={cameraImage} alt="Camera Image" width='100'/>
      </ImageContainer>
    </TopCategoriesCardRoot>
  );
};

export default TopCategoriesCard;