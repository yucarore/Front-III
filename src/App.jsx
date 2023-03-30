import "./App.css";
// import ContenedorProductos from "./components/Productos/ContenedorProductos";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import ContenedorProductos from "./components/Productos/ContenedorProductos";
import ContenedorHome from "./components/Home/ContenedorHome";
import CrearProductos from "./components/CrearProductos/CrearProductos";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import ContenedorDelDetalleDelProducto from "./components/Pages/DetalleDelproducto/Contenedor.DelDetalleDelProducto";

function App() {
  return (
    // <div className="App">
    //   <ContenedorProductos />
    // </div>
    <BrowserRouter>
      <Routes>

      <Route path="/login" element={<h1>Vista Login</h1>}/>

           <Route  element={<Layout/>}>
              <Route path="/" element={ <ContenedorHome/> }/>        
              <Route path="/cart" element={<h1>Vista Tarjetas</h1>}/>
              <Route path="/shop" element={<ContenedorProductos/>}/>
              <Route path="/crear-productos" element={<CrearProductos/>}/>
              <Route path="/detalleDelProducto/:id" element={<ContenedorDelDetalleDelProducto/>}/>
           </Route>

            <Route path="*" element={<h2>No Funciona</h2>}/>
                
       
      </Routes>

    </BrowserRouter>
  );
}

export default App;
