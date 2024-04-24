import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  setAddToCartReducer,
  setUserSignUpReducer,
} from "./reducer";

const reducers = combineReducers({
  allproducts: productReducer,
  product: selectedProductReducer,
  user: setUserSignUpReducer,
  addtocart: setAddToCartReducer,
});

export default reducers;
