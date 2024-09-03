import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/homepage';
import ProductPage from './components/productPage';


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <HomePage />
          } />
          <Route path="/products" element={
            <ProductPage />
          } />
        </Routes>
    </Router>
  );
}

export default App;
