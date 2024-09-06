import React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from './theme';

// Replace these with your own social media URLs
const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                color: theme.colors.lightBeige,
                py: 3,
                pb: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
                backgroundColor: theme.colors.brown,
                fontFamily: theme.fonts.text
            }}
        >
            <Container maxWidth={false}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h3" sx={{
                            color: theme.colors.beige,
                            fontFamily: theme.fonts.logo
                        }} gutterBottom>
                            Diya Handicrafts
                        </Typography>
                        <Box>Established in 2019</Box>
                        <Box>Manufacturing & Exporting</Box>
                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="beige" gutterBottom>
                            LINKS
                        </Typography>
                        <Link href="/" to="About" color="inherit" display="block">About Us</Link>
                        <Link href="/products" color="inherit" display="block">Products</Link>
                        <Link href="/" to="Contact" color="inherit" display="block">Contact Us</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="beige" gutterBottom>
                            STORES
                        </Typography>
                        <Link href="https://www.amazon.com/stores/page/B7366461-CD62-4421-971D-BA746D4515C4" color="inherit" display="block">Amazon</Link>
                        <Link href="http://www.etsy.com/shop/Decorenvogue" color="inherit" display="block">Etsy</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="beige" gutterBottom>
                            SOCIAL MEDIA
                        </Typography>
                        <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton>
                        <Box>info@diyahandicrafts.in</Box>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="beige" align="center" sx={{ pt: 4 }} gutterBottoms>
                    © 2024 Diya Handicrafts. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
