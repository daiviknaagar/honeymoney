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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid2() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ alignContent: 'center' }}>
                <Grid container columns={{ xs: 2, sm: 2, md: 12 }}>
                    <Grid item xs={6} sx={{ padding: 0 }}>
                        <Item variant='outlined' sx={{ height: '70vh', borderRadius: 0, backgroundColor: theme.palette.primary.dark }}>
                            <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1" style={{}}>
                                <image>

                                </image>
                            </motion.div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={{
                        padding: 0,
                        position: { xs: 'absolute', sm: 'absolute', md: 'static' },
                    }}>
                        <Item variant='outlined' sx={{
                            height: '70vh',
                            borderRadius: 0,
                            alignContent: 'center',
                            backgroundColor: { xs: 'transparent', sm: 'transparent', md: theme.palette.primary.light },
                        }}>
                            <motion.div variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }} class="writeup" id="cont1"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    // backdropFilter: 'blur(10px)',
                                    // WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: 5,
                                    padding: 16
                                }}>
                                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                                    About Company
                                </Typography>
                                <Box component="main" sx={{ py: 3, px: { xs: 0, sm: 3, md: 5 }, textAlign: 'justify' }}>
                                    <Typography>
                                        We are an experienced company based in Agra (Uttar Pradesh ) and we have created a wide distribution network to export our goods to various countries in the world. Our Production Unit well-established manufacturing unit forms the backbone of our organization. Our production unit is divided into various units, helping us to carry out operations smoothly. Customization Facility we offer customized products making it in accordance with the needs of the customers, we can made anything in marble.
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
