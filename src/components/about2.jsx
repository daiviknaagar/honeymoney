import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, createTheme, Paper, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import theme from './theme';

const t = createTheme({})

const Item = styled(Paper)(() => ({
    textAlign: 'center',
}));

export default function AboutUsSection() {
    const isSmallScreen = useMediaQuery(t.breakpoints.down('md'));

    return (
        <Box id='About' sx={{
            flexGrow: 1,
            pt: '65.98px'
        }}>
            <Box sx={{ alignContent: 'center' }}>
                <Grid container columns={{ xs: 2, sm: 2, md: 12 }}
                    sx={{
                        backgroundColor: theme.colors.brown,
                    }}>
                    {/* About Us Text */}
                    <Grid item xs={12} md={6} sx={{ padding: 0 }}>
                        <Item variant='none' sx={{
                            backgroundColor: theme.colors.transparent, borderRadius: 0,
                            justifyContent: 'center',
                            display: 'flex',
                            px: '26px',
                            pt: { xs: '26px', md: '48px' },
                            pb: { xs: '26px', md: '60px' },
                        }}>
                            <motion.div
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
                                            mx: { xs: 0, sm: 3, md: 5 },
                                            maxHeight: 400,
                                            maxWidth: 500,
                                            objectFit: 'cover'
                                            // margin top and bottom
                                        }}
                                    />
                                )}
                                <Typography variant="h4" sx={{
                                    textAlign: 'left', px: { xs: 0, sm: 3, md: 5 }, py: 0,
                                    color: theme.colors.beige,
                                    fontSize: theme.fontSizes.sectionHeading,
                                    fontFamily: theme.fonts.sectionHeading,
                                    pt: { xs: '12px', md: '4px' },
                                    pb: { xs: '4px', md: '4px' },
                                }}>
                                    About Us
                                </Typography>

                                <Box component="main" sx={{
                                    px: { xs: 0, sm: 3, md: 5 },
                                    textAlign: 'left',
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: 500,
                                    color: theme.colors.lightBeige,
                                    fontFamily: theme.fonts.text,
                                    fontSize: theme.fontSizes.text,
                                }}>
                                    <Typography>
                                        <Box sx={{
                                            py: '4px'
                                        }}>
                                            Diya Handicrafts is a distinguished organization engaged in manufacturing and exporting an exclusive collection of Stone / Marble Handicrafts. Nestled in the historic city of Agra, renowned for its rich heritage in marble craftsmanship, we blend traditional artistry with modern design to create stunning marble pieces that enhance your living spaces.
                                        </Box>
                                        <Box sx={{
                                            py: '4px'
                                        }}>
                                            Established in 2019, we have scaled our business to cater the needs of the increasing demand of our products. We manufacture our products in our well established production unit which helps us carry out operations smoothly. Our skilled artisans, using time-honored techniques passed down through generations, meticulously sculpt and polish each piece to perfection.
                                        </Box>
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Item>
                    </Grid>

                    {/* Image for larger screens */}
                    {!isSmallScreen && (
                        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
                            <Item variant='none' sx={{
                                height: '100%',
                                borderRadius: 0,
                                backgroundColor: theme.colors.transparent,
                                p: 0
                            }}>
                                <motion.div
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
