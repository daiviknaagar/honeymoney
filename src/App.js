import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ResponsiveGrid from "./components/about";
import ResponsiveGrid2 from "./components/about2";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import DrawerAppBar from "./components/navbar";
import Carousel from "./components/products2";
import Speciality from "./components/speciality";
import ProductList from './components/productList';
import { Box, Toolbar } from '@mui/material';
import PageHeading from './components/heading';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <Box>
              <Home />
              <DrawerAppBar />
              <ResponsiveGrid2 />
              <ResponsiveGrid />
              <Carousel />
              {/* <Products /> */}
              <Speciality />
              <Contact />
              <Footer />
            </Box>
          } />
          <Route path="/products" element={
            <Box>
              <DrawerAppBar />
              <Toolbar sx={{backgroundColor: "#FFF8E8"}}/>
              <PageHeading title="Products" image="https://images.unsplash.com/photo-1610701596295-4dc5d6289214?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <ProductList />
              <Footer />
            </Box>
          } />
        </Routes>
    </Router>
  );
}

export default App;
