import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { editProductAction } from '../actions/productActions';

const EditProduct = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();

  // State de producto
  const [product, setProduct] = useState({
    name: '',
    price: ''
  });

  // Producto a editar
  const productEdit = useSelector( state => state.products.productEdit );

  //if (!product) return null; => Para usar useEffect no tiene que existir un 'return null;'

  // Llenar el state automáticamente
  useEffect(() => {
    setProduct(productEdit);
  }, [productEdit])

  const { name, price} = product;

  // Leer los datos del formulario
  const onChangeFormulario = e => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  const submitEditProduct = e => {
    e.preventDefault();
    dispatch(editProductAction(product));
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form onSubmit={ submitEditProduct }>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="price"
                    value={price}
                    onChange={onChangeFormulario}
                />
              </div>

              <button 
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EditProduct;