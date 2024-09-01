import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, createTheme, Paper, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import theme from './theme';

const t = createTheme({})

const cardVariants = {
    offscreen: {
        y: 20,
        opacity: 0,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
}));

export default function ResponsiveGrid2() {
    const isSmallScreen = useMediaQuery(t.breakpoints.down('md'));

    return (
        <Box id='About' sx={{ flexGrow: 1 }}>
            <Box sx={{ alignContent: 'center' }}>
                <Grid container columns={{ xs: 2, sm: 2, md: 12 }} sx={{ backgroundColor: theme.colors.black }}>
                    {/* About Us Text */}
                    <Grid item xs={12} md={6} sx={{ padding: 0 }}>
                        <Item variant='none' sx={{
                            height: { xs: 'auto', md: '100vh' }, backgroundColor: theme.colors.transparent, borderRadius: 0,
                            justifyContent: 'center',
                            display: 'flex'
                        }}>
                            <motion.div
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                className="writeup"
                                id="cont1"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 0,
                                    alignItems: 'left',
                                    p: 10,
                                    justifyContent: 'center'
                                }}
                            >
                                {isSmallScreen && (
                                    <Box
                                        component="img"
                                        src={`https://woodworkingnearme.com/wp-content/uploads/2023/10/image-1698526664-scaled.jpg`}
                                        alt="Avatar"
                                        sx={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            m: { xs: 0, sm: 3, md: 5 },
                                            maxHeight: 400,
                                            maxWidth: 500,
                                            objectFit: 'cover'
                                            // margin top and bottom
                                        }}
                                    />
                                )}
                                <Typography variant="h4" sx={{
                                    textAlign: 'left', px: { xs: 0, sm: 3, md: 5 }, py: 0,
                                    color: theme.colors.white,
                                    mt: 2,
                                    fontSize: theme.fontSizes.sectionHeading,
                                    fontFamily: theme.fonts.sectionHeading,
                                }}>
                                    About Us
                                </Typography>

                                <Box component="main" sx={{
                                    py: 2, px: { xs: 0, sm: 3, md: 5 }, textAlign: 'left',
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: 500,
                                    color: theme.colors.lightGrey,
                                    fontFamily: theme.fonts.text,
                                    fontSize: theme.fontSizes.text,
                                }}>
                                    <Typography>
                                        Diya Handicrafts is a distinguished organization engaged in manufacturing and exporting an exclusive collection of Stone / Marble Handicrafts. Nestled in the historic city of Agra, renowned for its rich heritage in marble craftsmanship, we blend traditional artistry with modern design to create stunning marble pieces that enhance your living spaces.
                                        <br /><br /> Established in 2019, we have scaled our business to cater the needs of the increasing demand of our products. We manufacture our products in our well established production unit which helps us carry out operations smoothly. Our skilled artisans, using time-honored techniques passed down through generations, meticulously sculpt and polish each piece to perfection.
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Item>
                    </Grid>

                    {/* Image for larger screens */}
                    {!isSmallScreen && (
                        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
                            <Item variant='none' sx={{ height: { xs: 'auto', md: '100vh' }, borderRadius: 0, p: { xs: 2, sm: 2, md: 0 }, pb: 0, backgroundColor: theme.colors.transparent }}>
                                <motion.div
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}
                                    className="writeup"
                                    id="cont1"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={`https://woodworkingnearme.com/wp-content/uploads/2023/10/image-1698526664-scaled.jpg`}
                                        alt="Avatar"
                                        sx={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </motion.div>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
}
