import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBarUser from './componentes/MenuBarUser';
import Carrusel from './componentes/Carusel';
import Catalogo from './componentes/CatalogoPeliculas';
import Paginacion from './componentes/Paginacion';
import Footer from './componentes/FooterPage';
import PageBuy from './componentes/PageBuy';
import Login from './componentes/Login';
import Buy from './componentes/Compra';
import FormModalBuy from './componentes/FormModalBuy';

const Main = () => (
  <div className="App">
      <MenuBarUser/>
      <Carrusel />  
      <Catalogo />
      <Paginacion />
      <Footer />
</div>
)

function App() {
  return (
   <BrowserRouter >
      <Routes>
        <Route index element={<Main />} />
        <Route path='/PageBuy' element={<PageBuy/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/PageBuy' element={<PageBuy />} />
        <Route path='/Compra' element={<Buy />} />
        <Route path='/FormModalBuy' element={<FormModalBuy />} />
        <Route path='/MenuBarUser' element={<MenuBarUser />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
