import { 
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from "../types";


// Cada Reducer tiene su propio State
const initialState = {
  products: [],
  error: null,
  loading: false
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case GET_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }

    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
  
    default:
      return state;
  }
}