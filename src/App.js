import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PageContainer from './containers/PageContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </PageContainer>
    </div>



  );
}

export default App;

