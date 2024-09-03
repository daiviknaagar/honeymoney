import * as React from 'react';
import { Box, Button, createTheme, Fade, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion";
import theme from './theme';
import { useNavigate } from 'react-router-dom';

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
        img: '/images/coaster_6.jpg',
        writeup: 'Elegant Home Décor: Enhance your interiors with our exquisite marble vases, sculptures, and decorative panels.'
    },
    {
        id: 2, content: 'Luxurious Furniture',
        img: '/images/tray_5.jpg',
        writeup: 'Luxurious Furniture: Discover our range of marble tables, counter tops, and custom-made pieces that exude sophistication and style.'
    },
    {
        id: 3, content: 'Bespoke Creations',
        img: '/images/photo_frame_5.jpg',
        writeup: 'Bespoke Creations: Partner with us to design unique marble products tailored to your personal vision and space requirements.'
    },
];

export default function ProductsSection() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [fadeIn, setFadeIn] = React.useState(true);
    const isSmallScreen = useMediaQuery(t.breakpoints.down('md'));
    const navigate = useNavigate();

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
                backgroundColor: theme.colors.olive,
                textAlign: { xs: 'center', md: 'left' },
                px: '26px',
                pt: { xs: '12px', md: '48px' },
                pb: { xs: '26px', md: '60px' },
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
                        px: 10,
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant={'h4'} sx={{
                        fontSize: theme.fontSizes.sectionHeading,
                        fontFamily: theme.fonts.sectionHeading,
                        px: { xs: 0, sm: 3, md: 5 },
                        pt: { xs: 2, md: 2 },
                        pb: { xs: 3, md: 2 },
                        color: theme.colors.beige,
                    }}>
                        Products
                    </Typography>

                    {isSmallScreen && (
                        <Box sx={{
                            position: 'relative', width: '100%', height: 'auto', display: 'flex',
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
                                            width: '100%',
                                            minHeight: 400,
                                            fontFamily: theme.fonts.text,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundImage: `url(${slide.img})`
                                        }}
                                    >
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
                                maxWidth: '500px',
                            }}>
                                <Typography sx={{
                                    color: theme.colors.lightBeige,
                                    px: { xs: 0, sm: 3, md: 5 },
                                    pt: '4px',
                                }}>
                                    We specialize in a diverse range of marble products, including:
                                </Typography>
                                <Typography sx={{
                                    color: theme.colors.lightBeige,
                                    px: { xs: 0, sm: 3, md: 5 },
                                    pb: '4px',
                                }}>
                                    <Box>
                                        <span style={{
                                            color: theme.colors.lightBeige,
                                        }}>Elegant Home Décor:</span> Enhance your interiors with our exquisite marble vases, sculptures, and decorative panels.
                                    </Box>
                                    <Box>
                                        <span style={{
                                            color: theme.colors.lightBeige,
                                        }}>Luxurious Furniture:</span> Discover our range of marble tables, counter tops, and custom-made pieces that exude sophistication and style.
                                    </Box>
                                    <Box>
                                        <span style={{
                                            color: theme.colors.lightBeige,
                                        }}>Bespoke Creations:</span> Partner with us to design unique marble products tailored to your personal vision and space requirements.
                                    </Box>
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
                        <Button
                            variant="none"
                            sx={{
                                backgroundColor: theme.colors.beige,
                                color: theme.colors.brown,
                                height: '40px',
                                width: '200px',
                                borderRadius: 0,
                                mx: '40px',
                                mt: { xs: '22px', md: '18px' },
                                fontFamily: theme.fonts.text,
                                '&:hover': {
                                    backgroundColor: theme.colors.lightBeige,
                                },
                            }}
                            onClick={() => {
                                navigate('/products')
                            }}
                        >
                            See More
                        </Button>

                    </Typography>
                </motion.div>
            </Box>

            {
                !isSmallScreen && (
                    <Box sx={{
                        position: 'relative', width: { xs: '100%', sm: '100%', md: '50%' },
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
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${slide.img})`
                                    }}
                                >
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
                )
            }
        </Box >
    );
}
