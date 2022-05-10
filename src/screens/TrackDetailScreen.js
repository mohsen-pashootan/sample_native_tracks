import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TrackDetailScreen = () => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
      <Button
        title="Go To TrackList"
        onPress={() => navigation.navigate("TrackList")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
