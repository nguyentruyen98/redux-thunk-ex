import axios from "axios";
import { ActionTypes } from "../contants/actionType";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://reqres.in/api/users/");
      dispatch({ type: ActionTypes.SET_PRODUCTS, payload: res });
      dispatch({
        type: ActionTypes.SUCCESS_MSG,
        payload: "Success",
      });
    } catch (error) {
      console.log(error);
    }
    // const res = await axios.get("https://reqres.in/api/users/");
    // dispatch({ type: ActionTypes.SET_PRODUCTS, payload: res });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
