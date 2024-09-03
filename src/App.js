import { Toolbar } from "@mui/material";
import ResponsiveGrid from "./components/about";
import ResponsiveGrid2 from "./components/about2";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import DrawerAppBar from "./components/navbar";
import Carousel from "./components/products2";
import Speciality from "./components/speciality";

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Home />
      <ResponsiveGrid2 />
      <ResponsiveGrid />
      <Carousel />
      {/* <Products /> */}
      <Speciality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
