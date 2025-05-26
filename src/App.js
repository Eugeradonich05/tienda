import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './HomePage/Hero';
import Feature from './HomePage/Feature';
import Presentation from './HomePage/Presentation';
import BestSell from './HomePage/BestSell';
import BannerPublicidad from './HomePage/BannerPublicidad';
import Review from './HomePage/Review';
import Subcription from './HomePage/Subcription';
import Footer from './Components/Footer';
import ProductoMain from './ProdDetails/ProdMain';
import ProductoDescripcion from './ProdDetails/ProdDesc';
import ProductoImagenSlider from './ProdDetails/ProductGallery';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Feature/>
      <Presentation/>
      <BestSell/>
      <BannerPublicidad/>
      <Review/>
      <Subcription/>
      {/* <ProductoMain/>
      <ProductoDescripcion/> */}
      <Footer/>
    </div>
  );
}

export default App;
