import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid, Typography } from '@mui/material';
import { motion } from "framer-motion";
import theme from './theme';
import SouthIcon from '@mui/icons-material/South';

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

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
}));

export default function Home() {
    const [offsetY, setOffsetY] = React.useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box id='Home' sx={{ flexGrow: 1 }}>
            {/* Background Image */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '160vh', // Adjusted height to cover more area
                backgroundImage: `url(https://images.pexels.com/photos/6213674/pexels-photo-6213674.jpeg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center -0px', // Shifts the image 50px upwards
                transform: `translateY(${offsetY * -0.5}px)`, // Parallax effect
                zIndex: -1, // Ensure background image is behind content
            }} />


            {/* Content */}
            <Box sx={{ position: 'relative', height: '100vh' }}>
                <Grid container columns={{ xs: 2, sm: 2, md: 12 }} sx={{ height: '100%' }}>
                    <Grid item xs={12} sx={{
                        padding: 0,
                        color: 'white',
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'right' },
                        alignItems: 'center',
                        zIndex: 1,
                    }}>
                        <Item variant='none' sx={{ borderRadius: 0, backgroundColor: theme.colors.transparent }}>
                            <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }} className="writeup" id="cont1"
                                style={{
                                    textAlign: { xs: 'center', md: 'right' },
                                    padding: '0 20px',
                                }}>
                                <Typography sx={{
                                    textAlign: { xs: 'center', md: 'right' },
                                    fontFamily: theme.fonts.moto,
                                    fontSize: theme.fontSizes.heading,
                                    lineHeight: 1.2,
                                    color: theme.colors.brown
                                }}>
                                    <Box>Inspired by Tradition</Box>
                                    <Box sx={{
                                        WebkitTextStrokeColor: theme.colors.brown,
                                        color: theme.colors.transparent,
                                        WebkitTextStrokeWidth: 2
                                    }}>Crafted for Luxury</Box>
                                </Typography>
                            </motion.div>
                        </Item>
                    </Grid>
                </Grid>
                <SouthIcon sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    color: theme.colors.brown
                }}></SouthIcon>
            </Box>
        </Box>
    );
}
