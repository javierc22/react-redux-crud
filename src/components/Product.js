import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({product}) => {
  const { id, name, price } = product;

  const dispatch = useDispatch();

  // Confirmar si desea eliminar producto
  const confirmDeleteProduct = id => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Un producto que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // pasar el ID del producto a eliminar al action
        dispatch(deleteProductAction(id));
      }
    });
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">
          ${price}
        </span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={ () => confirmDeleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
 
export default Product;