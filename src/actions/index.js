import auth from "../apis/auth";
import { USER_SIGNIN, USER_SIGNUP } from "./types";
import history from "../History";

export const userSignin = (formValues) => async (dispatch) => {
  try {
    const response = await auth.post("/signin", formValues);
    localStorage.setItem("Token", response.data.token);
    localStorage.setItem("userId", response.data.userId);
    dispatch({ type: USER_SIGNIN, payload: response.data });
    history.push("/home");
  } catch (err) {}
};

export const userSignup = (formValues) => async (dispatch) => {
  const response = await auth.post("/signup", formValues);
  dispatch({ type: USER_SIGNUP, payload: response.data });
  history.push("/");
};
