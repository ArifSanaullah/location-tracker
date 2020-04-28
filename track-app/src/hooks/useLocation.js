import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, cb) => {
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatchingLocation = async () => {
      try {
        await requestPermissionsAsync();
        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          cb
        );
        subscriber = sub;
      } catch (err) {
        setLocationError(err);
      }
    };

    if (shouldTrack) {
      startWatchingLocation();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, cb]);

  return [locationError];
};

export default useLocation;
