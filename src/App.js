import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
