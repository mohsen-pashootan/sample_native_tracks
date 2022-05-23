import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { state, fetchTracks } = useContext(TrackContext);
  useEffect(() => {
    if (isFocused) {
      fetchTracks();
    }
  }, [isFocused]);

  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
