import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
      <Button
        title="Go To TrackList"
        onPress={() => navigation.navigate("TrackList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
