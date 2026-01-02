
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes,Route } from "react-router";
import Home from './views/Home';
import Vegitables from './views/Vegitables';
import MyCart from './views/MyCart';


const root =createRoot( document.getElementById("root"));
root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/vegitables" element={<Vegitables/>}/>
  <Route path="/cart" element={<MyCart/>}/>
</Routes>
</BrowserRouter>
);
