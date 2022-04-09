import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Order from './Components/Order/Order';
import Shop from './Components/Shop/Shop';
function App() {
  return (
    <div className="App">  
       <Header></Header>
       <Routes>
         <Route path='/' element={<Shop/>}></Route>
         <Route path='/orders' element={<Order/>}></Route>
         <Route path='/inventory' element={<Inventory/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
       </Routes> 
       <h3>Ema John 2022. All rights researved</h3>
    </div>
  );
}

export default App;
