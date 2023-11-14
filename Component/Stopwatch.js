import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stopwatch = () => {
  const [timer, setTimer] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  var updatedms = timer.ms,
    updateds = timer.s,
    updatedm = timer.m,
    updatedh = timer.h;

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTimer({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  const run = () => {
    if (updatedm === 60) {
      updatedh++;
      updatedm = 0;
    }
    if (updateds === 60) {
      updatedm++;
      updateds = 0;
    }
    if (updatedms === 100) {
      updateds++;
      updatedms = 0;
    }
    updatedms++;
    return setTimer({ ms: updatedms, s: updateds, m: updatedm, h: updatedh });
  };

  return (
    <View style={styles.stopwatch}>
      <View style={styles.timerContent}>
        <Text style={styles.time}>
          {timer.h >= 10 ? timer.h : "0" + timer.h}:
        </Text>
        <Text style={styles.time}>
          {timer.m >= 10 ? timer.m : "0" + timer.m}:
        </Text>
        <Text style={styles.time}>
          {timer.s >= 10 ? timer.s : "0" + timer.s}:
        </Text>
        <Text style={styles.time}>
          {timer.ms >= 10 ? timer.ms : "0" + timer.ms}
        </Text>
      </View>
      <View style={styles.timerButtons}>
        {status === 0 ? (
          <TouchableOpacity onPress={start}>
            <Feather
              name="play"
              size={30}
              color="#636e72"
              style={styles.timerIcon}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
        {status === 1 ? (
          <>
            <TouchableOpacity onPress={stop}>
              <Ionicons
                name="pause-outline"
                size={30}
                color="#636e72"
                style={styles.timerIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={reset}>
              <MaterialCommunityIcons
                name="restart"
                size={30}
                color="#636e72"
                style={styles.timerIcon}
              />
            </TouchableOpacity>
          </>
        ) : (
          ""
        )}

        {status === 2 ? (
          <>
            <TouchableOpacity onPress={resume}>
              <Feather
                name="refresh-ccw"
                size={30}
                color="#636e72"
                style={styles.timerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={reset}>
              <MaterialCommunityIcons
                name="restart"
                size={30}
                color="#636e72"
                style={styles.timerIcon}
              />
            </TouchableOpacity>
          </>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  stopwatch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    elevation: 20,
  },
  timerContent: {
    display: "flex",
    flexDirection: "row",
  },
  time: {
    fontSize: 22,
    fontWeight: "bold",
  },
  timerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  timerIcon: {
    padding: 10,
    borderColor: "#dfe6e9",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
