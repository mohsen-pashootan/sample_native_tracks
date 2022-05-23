import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { useNavigation } from "@react-navigation/native";

const useSaveTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);
  const navigation = useNavigation();

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigation.navigate("TrackList");
  };
  return [saveTrack];
};

export default useSaveTrack;
