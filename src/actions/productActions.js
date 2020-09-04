import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
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