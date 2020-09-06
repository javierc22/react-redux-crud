import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_EDIT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR
} from "../types";

import clientAxios from '../config/axios';
import Swal from 'sweetalert2';


// Crear nuevos productos
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // Insertar producto en la API
      await clientAxios.post('/productos', product);
      // Si todo sale bien, actualizar el State
      dispatch(addProductSuccess(product));

      // Alerta
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      );

    } catch (error) {
      console.log(error);
      // Si hubo un error, cambiar el state
      dispatch(addProductError(true));

      // alerta de error
      Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: 'Hubo un error, intenta de nuevo'
      });
    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
});

// Si el producto se guarda en DB exitosamente
const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

// Si hubo un error
const addProductError = status => ({
  type: ADD_PRODUCT_ERROR,
  payload: status
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Función que descarga los productos de la base de datos
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const response = await clientAxios.get('/productos');
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getProductsError());
    }
  }
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true
});

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Selecciona y elimina el producto
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));

    try {
      await clientAxios.delete(`/productos/${id}`);
      dispatch(deleteProductSuccess());
      // Si se elimina, mostrar alerta de confirmación
      Swal.fire(
        'Eliminado',
        'El producto se eliminó correctamente',
        'success'
      )
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  }
}

const getProductDelete = id => ({
  type: GET_PRODUCT_DELETE,
  payload: id
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Selecciona y Edita producto
export function getProductEdit(product) {
  return dispatch => {
    dispatch(getProductEditAction(product));
  }
}

const getProductEditAction = product => ({
  type: GET_PRODUCT_EDIT,
  payload: product
});
