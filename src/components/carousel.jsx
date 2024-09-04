import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ROOT_PATH } from '../constants/constants';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <Box sx={{position: 'relative', mb: 2}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} component="img" src={ROOT_PATH + image} sx={{ width: '100%', height: 250, maxHeight: 250, objectFit: "cover"}} />
        ))}
      </Slider>
    </Box>
  );
};

const Arrow = ({ direction, onClick }) => {
  const isLeft = direction === 'left';
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        [isLeft ? 'left' : 'right']: 0,
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: 1,
        color: 'white',
      }}
    >
      {isLeft ? <ChevronLeft /> : <ChevronRight />}
    </IconButton>
  );
};

export default ImageCarousel;