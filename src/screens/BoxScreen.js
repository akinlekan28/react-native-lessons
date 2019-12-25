import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    // <View style={styles.viewStyle}>
    //   <Text style={styles.textStyle}>Child 1</Text>
    //   <Text style={styles.textStyle}>Child 2</Text>
    //   <Text style={styles.textStyle}>Child 3</Text>
    // </View>
    <View
      style={{
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <Text style={styles.textOne}></Text>
      <Text style={styles.textTwo}></Text>
      <Text style={styles.textThree}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center"
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1
  },
  textOne: {
    alignSelf: "flex-start",
    flex: 1,
    position: "absolute",
    left: 0,
    backgroundColor: "red",
    padding: 30
  },
  textTwo: {
    flex: 1,
    top: 80,
    position: "absolute",
    backgroundColor: "green",
    padding: 30
  },
  textThree: {
    flex: 1,
    right: 0,
    position: "absolute",
    backgroundColor: "purple",
    padding: 30
  }
});

export default BoxScreen;
