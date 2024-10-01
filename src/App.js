import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Footer from './components/General/Footer';
import NavBar from './components/General/NavBar';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Stores from './pages/Stores';
import Policies from './pages/Policies';



function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Homepage/>
    
      <Footer/>
      
    </div>
  );
}

export default App;
