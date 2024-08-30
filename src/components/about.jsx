import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#e9c46a',
            main: '#f4a261',
            dark: '#e76f51',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});


const about = [
    {
        heading: 'lorem ipsum',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime odio excepturi sint molestias dicta nobis magnam nemo velit ipsa aut a minus omnis, officiis, culpa, at iusto mollitia. Optio?',
        color: theme.palette.primary.light
    },
    {
        heading: 'lorem ipsum',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime odio excepturi sint molestias dicta nobis magnam nemo velit ipsa aut a minus omnis, officiis, culpa, at iusto mollitia. Optio?',
        color: theme.palette.primary.main
    },
    {
        heading: 'lorem ipsum',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime odio excepturi sint molestias dicta nobis magnam nemo velit ipsa aut a minus omnis, officiis, culpa, at iusto mollitia. Optio?',
        color: theme.palette.primary.dark
    }
]

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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <Box id="About" sx={{ flexGrow: 1, pt: 7 }}>
            {/* <Grid container spacing={0} columns={{ xs: 2, sm: 2, md: 12 }}>
                {about.map((aboutItem, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item variant='outlined' sx={{ borderRadius: 0, backgroundColor: aboutItem.color, height: '50vh', alignContent: 'center' }}>
                            <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1">
                                <Typography variant="h4">
                                    {aboutItem.heading}
                                </Typography>
                                <Box component="main" sx={{ py: 3, px: { xs: 0, sm: 3, md: 5 }, textAlign: 'justify' }}>
                                    <Typography>
                                        {aboutItem.content}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Item>
                    </Grid>
                ))}
            </Grid> */}
            <Box sx={{ borderRadius: 0, backgroundColor: theme.palette.primary.contrastText, height: '50vh', alignContent: 'center', p: '16px' }}>
                <motion.div variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>
                        About Company
                    </Typography>
                    <Box component="main" sx={{ py: 3, px: { xs: 0, sm: 3, md: 5 }, textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>
                        <Typography sx={{ maxWidth: 600 }}>
                            We “Diya Handicrafts” are a renowned organization engaged in manufacturing and exporting an exclusive collection of Stone / Marble Handicrafts, which includes all types of marble articles. These are based on the traditional arts of India, and known for its creative and innovative designs. The exclusive collection adds beauty and elegance to the interior decor.
                        </Typography>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
}
