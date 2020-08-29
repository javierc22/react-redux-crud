import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {
  // Utilizar useDispach
  const dispatch = useDispatch();

  // Llamar el Action de productAction
  const addProduct = () => dispatch(createNewProductAction());

  // submit formulario
  const submitNewProduct = e => {
    e.preventDefault();
    
    // Crear el nuevo producto
    addProduct();
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={ submitNewProduct }>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="price"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NewProduct;