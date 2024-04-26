import axios from "axios";
import { actiontypes } from "../constant/constant";


export const fetchproducts=()=>{
  return async (dispatch)=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    dispatch({type:actiontypes.FETCH_PRODUCTS,payload:response.data})
  }
}


export const setProducts = (products) => {
  return {
    type: actiontypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: actiontypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const filterProducts = (product) => {
  // console.log("filterproductaction", product);
  return {
    type: actiontypes.SET_MENS_CLOTHING,
    payload: product,
  };
};

export const setUserSignUp = (user) => {
  // console.log(user);
  return {
    type: actiontypes.SET_USER,
    payload: user,
  };
};

export const setAddToCart = (data) => {
  console.log("cartdata", data);
  return {
    type: actiontypes.SET_ADD_TO_CART,
    payload: data,
  };
};

export const setCartRemove = (id) => {
  console.log("remove cart", id);
  return {
    type: actiontypes.SET_CART_REMOVE,
    payload: { id },
  };
};

export const setPlusQty = (id) => {
  console.log("plusqtyaction", id);
  return {
    type: actiontypes.SET_PLUS_QTY,
    payload: id,
  };
};

export const setMinusQty = (id) => {
  console.log("minusqtyaction", id);
  return {
    type: actiontypes.SET_MINUS_QTY,
    payload: id,
  };
};
