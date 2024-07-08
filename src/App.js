import "./App.css";
import Banner from "./components/Banner";
import BestProducts from "./components/BestProducts";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;
