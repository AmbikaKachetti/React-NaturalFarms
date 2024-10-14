
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signin from './components/Signin';
import Products from './components/Products';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <BrowserRouter basename='/NaturalFarms'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
