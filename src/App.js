import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Hero from './HomePage/Hero';
import Feature from './HomePage/Feature';
import Presentation from './HomePage/Presentation';
import BestSell from './HomePage/BestSell';
import BannerPublicidad from './HomePage/BannerPublicidad';
import Review from './HomePage/Review';
import Subcription from './HomePage/Subcription';

import ProductoMain from './ProdDetails/ProdMain';
import ProductoDescripcion from './ProdDetails/ProdDesc';
import ProductoImagenSlider from './ProdDetails/ProductGallery';

function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <Presentation />
      <BestSell />
      <BannerPublicidad />
      <Review />
      <Subcription />
    </>
  );
}
function ProductPage() {
  return (
    <>
      <ProductoMain />
    </>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
