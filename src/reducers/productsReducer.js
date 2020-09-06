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


// Cada Reducer tiene su propio State
const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
  productEdit: null
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
    case GET_PRODUCTS_ERROR:
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }

    case GET_PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload
      }

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter( product => product.id !== state.productDelete),
        productDelete: null
      }

    case GET_PRODUCT_EDIT:
      return {
        ...state,
        productEdit: action.payload
      }
  
    default:
      return state;
  }
}