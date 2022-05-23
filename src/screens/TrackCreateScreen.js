import React, { useCallback, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import "../_mockLocation";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "./../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "./../components/TrackForm";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(location, recording),
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      <Text h3>{err ? err : ""}</Text>

      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
