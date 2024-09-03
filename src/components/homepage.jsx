import { useEffect } from "react";
import OurBrandsSection from "./about";
import AboutUsSection from "./about2";
import Contact from "./contact";
import Footer from "./footer";
import Home from "./home";
import DrawerAppBar from "./navbar";
import ProductsSection from "./products2";
import Speciality from "./speciality";
import { Box } from '@mui/material';
import { useLocation } from "react-router-dom";

export default function HomePage() {
    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        const element = document.getElementById(state.to);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    })

    return (
        <Box>
            <Home id="Home" />
            <DrawerAppBar />
            <AboutUsSection id="About" />
            <OurBrandsSection />
            <ProductsSection />
            <Speciality />
            <Contact id='Contact Us' />
            <Footer />
        </Box>
    )
}