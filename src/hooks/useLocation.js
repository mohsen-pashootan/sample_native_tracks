import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, callBack) => {
  const [err, setErr] = useState(null);
  const [subScriber, setSubScriber] = useState(null);

  const StartWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      const _subScriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callBack
      );
      setSubScriber(_subScriber);
    } catch (error) {
      setErr(error);
      console.error("catch err: ", err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      StartWatching();
    } else {
      subScriber.remove();
      setSubScriber(null);
    }
  }, [shouldTrack]);

  return [err];
};

export default useLocation;
