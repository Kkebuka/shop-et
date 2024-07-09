import "./App.css";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import BestProducts from "./components/BestProducts";
import Navbar from "./components/Navbar";
import Notify from "./components/Notify";
import TopProduct from "./components/TopProduct";
import WinterSale from "./components/WinterSale";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <TopProduct />
      <BestProducts />
      <WinterSale />
      <Notify />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
