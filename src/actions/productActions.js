import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from "../types";

// Crear nuevos productos
export function createNewProductAction(product) {
  return () => {
    console.log(product);
  }
}