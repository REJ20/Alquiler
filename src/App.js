import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import MenuBarUser from './componentes/MenuBarUser';
import Carrusel from './componentes/Carusel';
import Catalogo from './componentes/CatalogoPeliculas';
import Paginacion from './componentes/Paginacion';
import Pie from './componentes/Pie';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <MenuBarUser/>
        </header>
        <main>
          <Carrusel />
          <section>
            <Catalogo />
          </section>
          <section>
            <Paginacion />
          </section>
        </main>
        <footer>
          <Pie />
        </footer>
      </body>
    </div>
  );
}

export default App;
