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
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ alignContent: 'center' }}>
                <Grid container columns={{ xs: 2, sm: 2, md: 12 }}
                    sx={{
                        backgroundImage: `url(https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg)`,
                        backgroundRepeat: "never",
                        backgroundSize: "cover",
                        backgroundPosition: 'right',
                        height: "80vh",
                    }}
                >
                    <Grid item xs={6} sx={{
                        padding: 0,
                        color: 'white',
                        background: { xs: 'none', sm: 'none', md: 'linear-gradient(to right, transparent, #fff)' },
                    }}>
                        <Item variant='none' sx={{ height: '80vh', borderRadius: 0, backgroundColor: 'transparent' }}>
                            <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1" style={{
                                    height: '100%',
                                    width: '100%',

                                }}>
                            </motion.div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={{
                        padding: 0,
                        position: { xs: 'absolute', sm: 'absolute', md: 'static' },
                    }}>
                        <Item variant='none' sx={{
                            color: { xs: 'white', sm: 'white', md: 'black' },
                            height: '80vh',
                            borderRadius: 0,
                            alignContent: 'center',
                            backgroundColor: { xs: 'transparent', sm: 'transparent', md: 'white' },
                        }}>
                            <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: 15,
                                    margin: 32,
                                    paddingTop: 32,
                                    paddingBottom: 32,
                                }}>
                                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                    Diya.
                                </Typography>
                                <Box component="main" sx={{ pt: 3, px: { xs: 4, sm: 7, md: 9 }, textAlign: 'center' }}>
                                    <Typography>
                                        We “Diya Handicrafts” are a renowned organization engaged in manufacturing and exporting an exclusive collection of Stone / Marble Handicrafts, which includes all types of marble articles. These are based on the traditional arts of India, and known for its creative and innovative designs. The exclusive collection adds beauty and elegance to the interior decor.
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
