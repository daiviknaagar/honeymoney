import React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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
                color: 'grey',
                py: 3,
                pb: 6,
                borderTop: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'black'
            }}
        >
            <Container maxWidth={false}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h3" color="white" gutterBottom>
                            DIYA.
                        </Typography>
                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="white" gutterBottom>
                            PRODUCT
                        </Typography>
                        <Link href="#" color="inherit" display="block">Features</Link>
                        <Link href="#" color="inherit" display="block">Integrations</Link>
                        <Link href="#" color="inherit" display="block">Pricing</Link>
                        <Link href="#" color="inherit" display="block">FAQ</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="white" gutterBottom>
                            COMPANY
                        </Typography>
                        <Link href="#" color="inherit" display="block">About Us</Link>
                        <Link href="#" color="inherit" display="block">Careers</Link>
                        <Link href="#" color="inherit" display="block">Privacy Policy</Link>
                        <Link href="#" color="inherit" display="block">Terms of Service</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="white" gutterBottom>
                            DEVELOPERS
                        </Typography>
                        <Link href="#" color="inherit" display="block">Public API</Link>
                        <Link href="#" color="inherit" display="block">Documentation</Link>
                        <Link href="#" color="inherit" display="block">Guides</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="white" gutterBottom>
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
                    </Grid>
                </Grid>
                <Typography variant="body2" color="white" align="center" sx={{ pt: 4 }} gutterBottoms>
                    © 2024 Company Co. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
