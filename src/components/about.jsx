import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from "framer-motion";
import theme from './theme';

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
        <Box sx={{ flexGrow: 1, pt: 0 }}>
            <Box
                sx={{
                    borderRadius: 0,
                    backgroundColor: theme.colors.white,
                    height: '50vh',
                    alignContent: 'center',
                    p: '16px',
                }}
            >
                <motion.div
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className="writeup"
                    id="cont1"
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontFamily: theme.fonts.logo,
                            fontSize: theme.fontSizes.sectionHeading,
                        }}
                    >
                        Diya Handicrafts
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}
