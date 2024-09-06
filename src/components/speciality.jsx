import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Typography, Grid, Paper, Box } from '@mui/material';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import theme from './theme';

const Item = styled(Paper)(() => ({
    textAlign: 'center',
}));

export default function Speciality() {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: theme.colors.white,
            pb: 8
        }}>
            <Typography variant={'h3'} sx={{
                pt: 8, pb: 4, fontSize: '40px', textAlign: 'center',
                fontFamily: theme.fonts.sectionHeading
            }}>
                Why Choose Us?
            </Typography>
            <Grid container columns={{ xs: 4, sm: 8, md: 16 }} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {speciality.map((special, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item variant='none' sx={{
                            borderRadius: 0,
                            p: 2,
                            fontFamily: theme.fonts.text
                        }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: '10px',
                                }}
                            >
                                {special.icon}
                            </Box>
                            <Typography variant='h7' sx={{
                                fontWeight: 600
                            }}>
                                {special.text}<br />
                            </Typography>
                            <Typography variant='h10' sx={{
                                display: { xs: 'none', md: 'block' },
                                px: 3
                            }}>
                                {special.writeup}
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const speciality = [
    {
        text: 'Customized Solutions',
        icon: (<TipsAndUpdatesOutlinedIcon sx={{ fontSize: '60px' }} />),
        writeup: 'Crafting beautiful products according to customer needs'
    },
    {
        text: 'Client Satisfaction',
        icon: (<InsertEmoticonOutlinedIcon sx={{ fontSize: '60px' }} />),
        writeup: 'Dedicated to deliver customer satisfaction'
    },
    {
        text: 'Competitive Prices',
        icon: (<LocalOfferOutlinedIcon sx={{ fontSize: '60px' }} />),
        writeup: 'Handcrafted by skilled artisans and quality tested'
    },
    {
        text: 'High Quality Standards',
        icon: (<GppGoodOutlinedIcon sx={{ fontSize: '60px' }} />),
        writeup: 'Committed to sustainable sourcing and ethical practices'
    },
]