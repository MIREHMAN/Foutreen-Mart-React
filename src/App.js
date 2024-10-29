import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
        <NavBar />
      </Box >
      <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
      <MobileMenu/>
      </Box>

      <Homepage />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
