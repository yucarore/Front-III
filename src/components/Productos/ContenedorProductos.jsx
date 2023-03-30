import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductosPresentacion from "./Productos";

const ContenedorProductos = () => {
  const [items, setItems] = useState([]);
//   const [productoNuevo, setProductoNuevo] = useState({
//     name: "",
//     avatar: "",
//     precio: "",
//   });

  const [actualizarProductos, setActualizarProductos] = useState(false);

  useEffect(() => {
    setActualizarProductos(false);
    const informacion = axios.get("http://localhost:5000/water");
    informacion
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [actualizarProductos]);

  


  const borrarElemento = (id) => {
    axios.delete(`http://localhost:5000/water/${id}`);
    setActualizarProductos(true);
  };

  const editar = (id) => {
    axios.patch(`http://localhost:5000/water/${id}`, {
      price: 6000,
      name: "Editado",
    });
    setActualizarProductos(true);
  };

  return (
    <ProductosPresentacion
    //   handleSubmit={handleSubmit}
    //   handleChange={handleChange}
      borrarElemento={borrarElemento}
      editar={editar}
      items={items}
    />
  );
};

export default ContenedorProductos;
