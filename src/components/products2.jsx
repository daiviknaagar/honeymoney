import * as React from 'react';
import { Box, Button, createTheme, Fade, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion";
import theme from './theme';

const t = createTheme({});

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
        transition: {
            duration: 0.8,
        },
    },
};

const slides = [
    {
        id: 1, content: 'Elegant Home Décor',
        writeup: 'Elegant Home Décor: Enhance your interiors with our exquisite marble vases, sculptures, and decorative panels.'
    },
    {
        id: 2, content: 'Luxurious Furniture',
        writeup: 'Luxurious Furniture: Discover our range of marble tables, counter tops, and custom-made pieces that exude sophistication and style.'
    },
    {
        id: 3, content: 'Bespoke Creations',
        writeup: 'Bespoke Creations: Partner with us to design unique marble products tailored to your personal vision and space requirements.'
    },
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [fadeIn, setFadeIn] = React.useState(true);
    const isSmallScreen = useMediaQuery(t.breakpoints.down('md'));

    // Handle automatic slide change
    React.useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setFadeIn(true);
            }, 500);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleNext = () => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setFadeIn(true);
        }, 500);
    };

    const handlePrev = () => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            );
            setFadeIn(true);
        }, 500);
    };

    return (
        <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'flex' },
            flexDirection: { xs: 'column', sm: 'column', md: 'row-reverse' },
        }}>
            <Box sx={{
                position: 'relative',
                width: { xs: '100%', sm: '100%', md: '50%' },
                height: { xs: 'auto', sm: 'auto', md: 'auto' },
                minHeight: { xs: 'auto', sm: 'auto', md: '80vh' },
                backgroundColor: theme.colors.black,
                textAlign: { xs: 'center', md: 'left' },
                p: 2,
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'center'
            }} >
                <motion.div
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className="writeup"
                    id="cont1"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 0,
                        alignItems: 'left',
                        p: 10,
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant={'h4'} sx={{
                        fontSize: theme.fontSizes.sectionHeading,
                        fontFamily: theme.fonts.sectionHeading,
                        mb: { xs: 2, sm: 3, md: 0 },
                        px: { xs: 0, sm: 3, md: 5 },
                        color: theme.colors.white,
                    }}>
                        Products.
                    </Typography>

                    {isSmallScreen && (
                        <Box sx={{
                            position: 'relative', width: '100%', height: 'auto', mb: 2, display: 'flex',
                            justifyContent: 'center',
                            p: 0
                        }}>
                            {slides.map((slide, index) => (
                                <Fade
                                    key={slide.id}
                                    in={index === activeIndex && fadeIn}
                                    timeout={500}
                                    unmountOnExit
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: theme.colors.lightGrey,
                                            width: '100%',
                                            height: '40vh',
                                            maxHeight: 400,
                                            maxWidth: 500,
                                            fontFamily: theme.fonts.text
                                        }}
                                    >
                                        {slide.content}
                                    </Box>
                                </Fade>
                            ))}
                            <NavigateBeforeIcon
                                onClick={handlePrev}
                                sx={{
                                    position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer',
                                    color: theme.colors.white
                                }}
                            />
                            <NavigateNextIcon
                                onClick={handleNext}
                                sx={{
                                    position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer',
                                    color: theme.colors.white
                                }}
                            />
                        </Box>
                    )}
                    {!isSmallScreen && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                fontFamily: theme.fonts.text,
                                maxWidth: '500px'
                            }}>
                                <Typography sx={{
                                    mt: 1,
                                    fontSize: theme.fontSizes.text,
                                    color: '#eee',
                                    px: { xs: 0, sm: 3, md: 5 }
                                }}>
                                    We specialize in a diverse range of marble products, including:
                                </Typography>
                                <Typography sx={{
                                    mt: 1,
                                    mb: 2,
                                    fontSize: { xs: 12, sm: 14, md: 16 },
                                    color: theme.colors.lightGrey,
                                    px: { xs: 2, sm: 5, md: 7 }
                                }}>
                                    <span style={{
                                        color: '#eee',
                                        fontWeight: '600'
                                    }}>Elegant Home Décor:</span> Enhance your interiors with our exquisite marble vases, sculptures, and decorative panels.
                                    <br /><span style={{
                                        color: '#eee',
                                        fontWeight: '600'
                                    }}>Luxurious Furniture:</span> Discover our range of marble tables, counter tops, and custom-made pieces that exude sophistication and style.
                                    <br /><span style={{
                                        color: '#eee',
                                        fontWeight: '600'
                                    }}>Bespoke Creations:</span> Partner with us to design unique marble products tailored to your personal vision and space requirements.
                                </Typography>
                                {/* {
                            slides.map((slide, index) => (
                                <Fade
                                    key={slide.id}
                                    in={index === activeIndex && fadeIn}
                                    timeout={500}
                                    unmountOnExit
                                >
                                    <Typography sx={{ mt: 1, fontSize: { xs: 14, sm: 16, md: 18 } }}>
                                        {slide.writeup}
                                    </Typography>
                                </Fade>
                            ))
                        } */}
                            </Box>
                        </Box>
                    )}
                    <Typography sx={{
                        textAlign: { xs: 'center', md: 'left' }
                    }}>
                        <Button variant='outlined' sx={{
                            // left: { xs: 2, sm: 3, md: 0 },
                            // right: { xs: 2, sm: 3, md: 0 },
                            borderColor: theme.colors.white,
                            color: theme.colors.white,
                            height: '40px',
                            width: '200px',
                            borderRadius: 0,
                            mb: 2,
                            mx: '40px',
                            fontFamily: theme.fonts.text
                        }}>
                            See More
                        </Button>
                    </Typography>
                </motion.div>
            </Box>

            {!isSmallScreen && (
                <Box sx={{
                    position: 'relative', width: { xs: '100%', sm: '100%', md: '50%' }, height: '80vh',
                    backgroundColor: theme.colors.white,
                }}>
                    {slides.map((slide, index) => (
                        <Fade
                            key={slide.id}
                            in={index === activeIndex && fadeIn}
                            timeout={500}
                            unmountOnExit
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: theme.colors.lightGrey,
                                }}
                            >
                                {slide.content}
                            </Box>
                        </Fade>
                    ))}
                    <NavigateBeforeIcon
                        onClick={handlePrev}
                        sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                    <NavigateNextIcon
                        onClick={handleNext}
                        sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                </Box>
            )}
        </Box>
    );
}
