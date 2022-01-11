import { combineReducers } from "redux";

import { productReducer, selectedProductReducer } from "./productsReducer";
import { msgReducer } from "./msgReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  msg: msgReducer,
});

export default reducers;
