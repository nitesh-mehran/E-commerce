import { useState } from 'react'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Cart from './components/Cart';
import ToPay from './components/ToPay';
import Qrpay from './components/Qrpay';

function App() {
  const [inputtext, setInputtext] = useState("");


  return (
    <>
    <Router>
      <Navbar inputtext={inputtext} setInputtext={setInputtext} />
      <Routes>
        <Route path='/' element={<Cards inputtext={inputtext} />}/>
        <Route path='/addtocart' element={<Cart inputtext={inputtext}  />}/>
        <Route path='/topay' element={<ToPay/>}/>
        <Route path='/qrpay' element={<Qrpay/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
