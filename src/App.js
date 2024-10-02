import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/General/Footer";
import NavBar from "./components/General/NavBar";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Stores from "./pages/Stores";
import About from "./pages/About";
import Dashboard from "./pages/CMS Panels/Dashboard";
import AdminDashboardContent from "./components/Dashboard/ContentSectionData/AdminDashboardContent";
import AdminUserContent from "./components/Dashboard/ContentSectionData/AdminUserContent";
import AdminSellerContent from "./components/Dashboard/ContentSectionData/AdminSellerContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/products" element={<Products />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/admin_dashboard_content"
            element={<AdminDashboardContent />}
          />
          <Route path="/admin_user_content" element={<AdminUserContent />} />
          <Route
            path="/admin_seller_content"
            element={<AdminSellerContent />}
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
