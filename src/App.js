import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Homepage from "./pages/Homepage/Homepage";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
        <NavBar />
      </Box >
      <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
      <MobileMenu/>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none", lg: "none" }, backgroundColor:'aqua' , p:1, margin:'auto'}}>
      <SearchBar/>
      </Box>
      <Homepage />
      <BrowserRouter>
        <Routes>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
