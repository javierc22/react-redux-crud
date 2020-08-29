import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from "../types";

// axios
import clientAxios from '../config/axios';

// Crear nuevos productos
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // Insertar producto en la API
      await clientAxios.post('/productos', product);
      // Si todo sale bien, actualizar el State
      dispatch(addProductSuccess(product));
    } catch (error) {
      console.log(error);
      // Si hubo un error, cambiar el state
      dispatch(addProducterror(true));
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
const addProducterror = status => ({
  type: ADD_PRODUCT_ERROR,
  payload: status
});
