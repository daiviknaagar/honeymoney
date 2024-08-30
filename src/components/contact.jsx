import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Contact() {
    return (
        <Box sx={{ flexGrow: 1, py: 4 }}>
            <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 12 }}>
                <Grid item xs={12}>
                    <Item variant='outlined' sx={{
                        borderRadius: 0,
                        borderBottom: 0
                    }}>
                        <Typography id="Contact Us" variant='h1' sx={{ pt: 8, pb: 3, fontSize: { xs: 70, md: 96 } }}>
                            Contact Us.
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            size='small'
                            sx={{ width: { xs: 9 / 10, md: 3 / 4 }, m: 1, fontSize: '0.5rem', maxWidth: 500 }}
                        /><br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            size='small'
                            sx={{ width: { xs: 9 / 10, md: 3 / 4 }, m: 1, fontSize: '0.5rem', maxWidth: 500 }}
                        /><br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            size='small'
                            sx={{ width: { xs: 9 / 10, md: 3 / 4 }, m: 1, fontSize: '0.5rem', maxWidth: 500 }}
                        /><br />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            size='small'
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            sx={{ width: { xs: 9 / 10, md: 3 / 4 }, m: 1, fontSize: '0.5rem', maxWidth: 500 }}
                        /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            size='small'
                            sx={{ width: { xs: 9 / 10, md: 3 / 4 }, m: 1, fontSize: '0.5rem', maxWidth: 500 }}
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}