import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { motion } from "framer-motion";
import theme from './theme';
import { ROOT_PATH } from '../constants/constants';


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
    },
};

export default function OurBrandsSection() {
    return (
            <Box
                sx={{
                    borderRadius: 0,
                    backgroundColor: theme.colors.white,
                    alignContent: 'center',
                    justifyContent: 'center',
                    mt: 8,
                    mb: 8
                }}
            >
                <Typography variant={'h3'} sx={{ pb: 4, fontSize: '40px', textAlign: 'center', fontFamily: theme.fonts.sectionHeading}}>
                    Our Brands
                </Typography>
                <Box
                    variants={cardVariants}
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                >
                    <Box
                        component="img"
                        src={ROOT_PATH + "/images/brands/decorEnvogueLogo.jpeg"}
                        sx={{
                            height: '200px',
                            mt: 4,
                            mb: 4
                        }}
                    >
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            fontFamily: theme.fonts.text,
                            mb: 4
                        }}
                    >
                        Available on <Link href="https://www.amazon.com/stores/page/B7366461-CD62-4421-971D-BA746D4515C4" color="inherit">Amazon</Link> and <Link href="http://www.etsy.com/shop/Decorenvogue" color="inherit">Etsy</Link>
                    </Typography>
                </Box>
            </Box>
    );
}
