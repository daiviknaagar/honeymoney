import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { color } from 'framer-motion';

// Define a styled Box component for the background
const BackgroundBox = styled(Box)(({ image }) => ({
  width: '100%',
  height: '300px', // Adjust the height as needed
  backgroundImage: `url(${image})`, // Use the image prop for the background URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff', // Text color
}));

const PageHeading = ({ title, image }) => {
  return (
    <BackgroundBox image={image}>
      <Typography variant="h2" component="h1" sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}}>
        {title}
      </Typography>
    </BackgroundBox>
  );
};

export default PageHeading;