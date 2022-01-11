import { ActionTypes } from "../contants/actionType";
const initialState = {
  msg: "",
};
export const msgReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SUCCESS_MSG:
      return { ...state, msg: payload };
    default:
      return state;
  }
};
