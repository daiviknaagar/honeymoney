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
  alignItems: 'end',
  justifyContent: 'start',
  color: '#674636', // Text color
}));

const PageHeading = ({ title, image }) => {
  return (
    <BackgroundBox image={image}>
      <Typography variant="h3" component="h2" sx={{ ml: 3, mr: 3, p: 2, pl:3, pr:3, backgroundColor: "#FFF8E8"}}>
        {title}
      </Typography>
    </BackgroundBox>
  );
};

export default PageHeading;