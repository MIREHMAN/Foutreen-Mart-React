import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/General/Footer";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Stores from "./pages/Stores";
import About from "./pages/About";
import LoginForm from "./components/General/LoginForm";

function App() {
  return (
    <div className="App">
      
     <Homepage />
      <BrowserRouter>
        <Routes>
        
        <Route path="/products" element={<Products />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm/>} />
        
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
