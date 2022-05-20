import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../helper/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNED_IN":
      return { token: action.payload, errorMessage: "" };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    case "SIGNED_OUT":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSigin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGNED_IN", payload: token });
    navigate("TrackListFlow");
  } else {
    navigate("Sign_in");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR_MESSAGE" });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNED_IN", payload: response.data.token });

      navigate("TrackListFlow");
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNED_IN", payload: response.data.token });

      navigate("TrackListFlow");
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGNED_OUT" });
    navigate("Sign_in");
  } catch (error) {
    dispatch({
      type: "ADD_ERROR",
      payload: "something went wrong with sign out",
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSigin },
  { token: null, errorMessage: "" }
);
