import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

const EditProduct = () => {
  // Producto a editar
  const product = useSelector( state => state.products.productEdit );

  if (!product) return null;

  const { name, price, id } = product;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
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