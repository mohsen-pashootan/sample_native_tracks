import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = () => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go To TrackDetail"
        onPress={() =>
          navigation.navigate("TrackListFlow", { screen: "TrackDetail" })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
