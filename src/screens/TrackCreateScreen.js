import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import "../_mockLocation";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    StartWatching();
  }, []);

  const StartWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
      console.error("catch err: ", err);
    }
  };
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      <Text h3>{err ? err : ""}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
