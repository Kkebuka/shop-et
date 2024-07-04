import "./App.css";
import Banner from "./components/Banner";
import BestProducts from "./components/BestProducts";
import Navbar from "./components/Navbar";
import TopProduct from "./components/TopProduct";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <TopProduct />
      <BestProducts />
    </>
  );
}

export default App;
