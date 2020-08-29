import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from "../types";


// Cada Reducer tiene su propio State
const initialState = {
  products: [],
  error: null,
  loading: false
}

export default function( state = initialState, action ) {
  switch (action.type) {
  
    default:
      return state;
  }
}