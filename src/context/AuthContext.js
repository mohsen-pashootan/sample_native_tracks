import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNED_UP":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNED_UP", payload: response.data.token });
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  ({ email, password }) => {};

const signout = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
