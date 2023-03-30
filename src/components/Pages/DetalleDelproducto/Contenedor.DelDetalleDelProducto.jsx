import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetalleDelProducto from "./DetalleDelProducto";

const ContenedorDelDetalleDelProducto = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/water/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div>
      <DetalleDelProducto product={product} />
    </div>
  );
};

export default ContenedorDelDetalleDelProducto;
