import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SigninScreens = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SigninScreens</Text>
      <Button
        title="Go To Signup"
        onPress={() => navigation.navigate("Sign up")}
      />
      <Button
        title="Go To mainFlow"
        onPress={() =>
          navigation.navigate("TrackListFlow", { screen: "TrackList" })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreens;
