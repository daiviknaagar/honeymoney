import ResponsiveGrid from "./components/about";
import ResponsiveGrid2 from "./components/about2";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import DrawerAppBar from "./components/navbar";
import Products from "./components/products";
import Speciality from "./components/speciality";

function App() {
  return (
    <div>
      <Home />
      <DrawerAppBar />
      <ResponsiveGrid2 />
      <ResponsiveGrid />
      <Products />
      <Speciality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
