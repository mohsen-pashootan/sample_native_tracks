import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);

  const track = state.find((_track) => _track._id === _id);
  const initialCoord = track.locations[0].coords;
  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>

      <MapView
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoord,
        }}
        region={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
