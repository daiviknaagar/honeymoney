import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion"

const cardVariants = {
    offscreen: {
        y: 20,
        opacity: 0,
        scale: 0.9
    },
    onscreen: {
        y: 0,
        scale: 1,
        opacity: 1
    }
};

export default function StandardImageList() {
    const theme = useTheme();

    // Define breakpoints using useMediaQuery
    const isXs = useMediaQuery(theme.breakpoints.only('xs')); // Extra small screens
    const isSm = useMediaQuery(theme.breakpoints.only('sm')); // Small screens
    const isMd = useMediaQuery(theme.breakpoints.only('md')); // Medium screens
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));   // Large screens and up

    // Determine the number of columns based on the screen size
    let columns;
    if (isXs) {
        columns = 2;
    } else if (isSm) {
        columns = 3;
    } else if (isMd) {
        columns = 4;
    } else if (isLg) {
        columns = 6;
    }

    return (
        <motion.Box sx={{}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1"
        >
            <Typography id="Products" variant={'h1'} sx={{ pt: 8, pb: 3, fontSize: { xs: 70, md: 96 } }}>
                Products.
            </Typography>
            <ImageList gap={8} sx={{
                width: '100%',
                p: 1,
            }} cols={columns}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                '&:hover .overlay': {
                                    height: '100%',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt="Avatar"
                                sx={{
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 2
                                }}
                            />
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    bgcolor: '#008CBA',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: 0,
                                    transition: '0.5s ease',
                                    borderRadius: 2
                                }}
                            >
                                <Box
                                    variant="h6"
                                    sx={{
                                        color: 'white',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        whiteSpace: 'nowrap',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                >
                                    <Box sx={{
                                        height: '100%',
                                        p: 2
                                    }}>
                                        <Typography variant='h4'>Category</Typography>
                                        <Button variant='contained' disableElevation sx={{
                                            backgroundColor: 'white',
                                            color: '#008CBA',
                                            mt: '60%',
                                            width: '100%',
                                        }}>View Items</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </ImageListItem>
                ))}
            </ImageList>
        </motion.Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
