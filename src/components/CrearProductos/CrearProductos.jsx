import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"


const CrearProductos = () => {

    
    const [productoNuevo, setProductoNuevo] = useState({
        name: "",
        avatar: "",
        precio: "",
      });

      const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
          name: productoNuevo.name,
          precio: Number(productoNuevo.precio),
          avatar: productoNuevo.avatar,
        };
        const create = axios.post("http://localhost:5000/water", data);
        create.then((res) => console.log(res)).catch((err) => console.log(err));
        navigate("/shop")
          // setActualizarProductos(true);
      };
    

      const handleChange = (e) => {
        setProductoNuevo({ ...productoNuevo, [e.target.name]: e.target.value });
      };

      
       

  return (
    <div>CrearProductos

<form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        />
        <input name="precio" placeholder="precio" onChange={handleChange} />
        <input name="avatar" placeholder="imagen" onChange={handleChange} />


        <button type="submit" >Crear</button>


      </form>


        
    </div>
  )
}

export default CrearProductos