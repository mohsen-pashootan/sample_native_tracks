import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackCreateScreen = () => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Button
        title="Go To Signin"
        onPress={() => navigation.navigate("Signin")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
