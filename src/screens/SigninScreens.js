import React, { useContext, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "./../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreens = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribeBlur = navigation.addListener("blur  ", () =>
      clearErrorMessage()
    );
    return () => unsubscribeBlur;
  }, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />

      <NavLink
        text="Dont have an account? Sign up instead"
        routName="Sign_up"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreens;
