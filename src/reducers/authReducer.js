import { USER_SIGNIN, USER_SIGNUP } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...state, signin: action.payload };
    case USER_SIGNUP:
      return { ...state, signup: action.payload };
    default:
      return state;
  }
};
