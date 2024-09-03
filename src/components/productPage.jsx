import Footer from "./footer";
import DrawerAppBar from "./navbar";
import ProductList from './productList';
import { Box, Toolbar } from '@mui/material';
import PageHeading from './heading';
import theme from './theme';
import { useEffect } from "react";

export default function ProductPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Box sx={{ backgroundColor: theme.colors.beige }}>
            <DrawerAppBar />
            <Toolbar sx={{ backgroundColor: theme.colors.beige }} />
            <PageHeading title="Products" image="https://images.unsplash.com/photo-1610701596295-4dc5d6289214?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ProductList />
            <Footer />
        </Box>
    )
}