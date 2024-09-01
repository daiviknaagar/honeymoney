import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography, Grid, Paper, Box, TextField } from '@mui/material';
import theme from './theme';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
}));

export default function Contact() {
    return (
        <Box sx={{
            flexGrow: 1, py: 4,
            backgroundColor: theme.colors.white
        }}>
            <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 12 }}>
                <Grid item xs={12}>
                    <Item variant='outlined' sx={{
                        borderRadius: 0,
                        borderBottom: 0
                    }}>
                        <Typography id="Contact Us" variant='h1' sx={{
                            pt: 8, pb: 3, fontSize: theme.fontSizes.sectionHeading,
                            fontFamily: theme.fonts.sectionHeading,
                            color: theme.colors.black
                        }}>
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
                        /><br />
                        <Button variant='outlined'
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 }, m: 1, maxWidth: 500,
                                height: '40px', py: '8.5px', px: '14px',
                                textAlign: 'center'
                            }}>Send Message</Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}