import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Speciality() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant={'h1'} sx={{ pt: 8, pb: 3, fontSize: { xs: 50, sm: 70, md: 96 }, textAlign: 'center' }}>
                Services we Offer.
            </Typography>
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {speciality.map((special, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item variant='none' sx={{
                            borderRadius: 0,
                            height: '200px'
                        }}>
                            <Box
                                sx={{
                                    height: '150px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {special.icon}
                            </Box>
                            <Typography variant='h6'>
                                {special.text}
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
        icon: (<TipsAndUpdatesOutlinedIcon sx={{ fontSize: '100px' }} />)
    },
    {
        text: 'Client Satisfaction',
        icon: (<InsertEmoticonOutlinedIcon sx={{ fontSize: '100px' }} />)
    },
    {
        text: 'Competitive Prices',
        icon: (<LocalOfferOutlinedIcon sx={{ fontSize: '100px' }} />)
    },
    {
        text: 'High Quality Standards',
        icon: (<GppGoodOutlinedIcon sx={{ fontSize: '100px' }} />)
    },
    {
        text: 'Ethical Business Policies',
        icon: (<LocalPoliceOutlinedIcon sx={{ fontSize: '100px' }} />)
    },
]