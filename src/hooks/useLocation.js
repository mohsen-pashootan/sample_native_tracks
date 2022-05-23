import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subScriber;
    const StartWatching = async () => {
      try {
        await requestForegroundPermissionsAsync();
        subScriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (error) {
        setErr(error);
        console.error("catch err: ", err);
      }
    };

    if (shouldTrack) {
      StartWatching();
    } else {
      if (subScriber) {
        subScriber.remove();
      }
      subScriber = null;
    }

    return () => {
      if (subScriber) {
        subScriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

export default useLocation;
