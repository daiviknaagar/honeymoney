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
        <Box id="Contact Us" sx={{
            flexGrow: 1, py: 7,
            backgroundColor: theme.colors.lightBeige,
        }}>
            <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 12 }}>
                <Grid item xs={12}>
                    <Item variant='none' sx={{
                        borderRadius: 0,
                        borderBottom: 0,
                        backgroundColor: theme.colors.lightBeige
                    }}>
                        <Typography variant='h1' sx={{
                            pt: 0, pb: 3, fontSize: theme.fontSizes.sectionHeading,
                            fontFamily: theme.fonts.sectionHeading,
                            color: theme.colors.black,
                            fontWeight: 400
                        }}>
                            Contact Us.
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            size="small"
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 },
                                m: 1,
                                height: '2em',
                                maxWidth: 500,
                                borderRadius: 0,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        /><br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            size="small"
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 },
                                m: 1,
                                height: '2em',
                                maxWidth: 500,
                                borderRadius: 0,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        /><br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            size="small"
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 },
                                m: 1,
                                height: '2em',
                                maxWidth: 500,
                                borderRadius: 0,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        /><br />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 },
                                m: 1,
                                height: '2em',
                                maxWidth: 500,
                                borderRadius: 0,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            size="small"
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 },
                                m: 1,
                                maxWidth: 500,
                                borderRadius: 0,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        /><br />
                        <Button
                            variant="contained"
                            sx={{
                                width: { xs: 9 / 10, md: 3 / 4 },
                                m: 1,
                                maxWidth: 500,
                                height: '40px',
                                py: '8.5px',
                                px: '14px',
                                textAlign: 'center',
                                backgroundColor: theme.colors.olive,
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: theme.colors.black,
                                },
                            }}
                        >
                            Send Message
                        </Button>

                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}