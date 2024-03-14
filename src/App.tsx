
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import Costumers from "./pages/Costumers";
import Users from "./pages/Users";




export function App() {
  return (
    
      <Router>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={Products()}/>
        <Route path="/costumers" element={Costumers()}/>
        <Route path="/users" element={Users()}/>
      </Routes>
      </Router>


   
  );
}


