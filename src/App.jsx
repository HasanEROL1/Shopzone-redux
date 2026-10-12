import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from './containers/PageContainer.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
         <Header/>
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

