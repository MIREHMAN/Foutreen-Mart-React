import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";


function App() {
  return (
    <div className="App">
      
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
