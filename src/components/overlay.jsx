import React from 'react';
import { Box, Typography } from '@mui/material';

function OverlayComponent() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '50%',
                '&:hover .overlay': {
                    height: '100%',
                },
            }}
        >
            <Box
                component="img"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt="Avatar"
                sx={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                }}
            />
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: '#008CBA',
                    overflow: 'hidden',
                    width: '100%',
                    height: 0,
                    transition: '0.5s ease',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Hello World
                </Typography>
            </Box>
        </Box>
    );
}

export default OverlayComponent;
