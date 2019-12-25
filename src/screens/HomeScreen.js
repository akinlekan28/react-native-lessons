import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there my name is Olalekan Akintola!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
        style={styles.buttonStyle}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.buttonStyle}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ImageScreen")}>
        <Text style={styles.buttonStyle}>Go to Image Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CounterScreen")}>
        <Text style={styles.buttonStyle}>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ColorScreen")}>
        <Text style={styles.buttonStyle}>Go to Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SquareScreen")}>
        <Text style={styles.buttonStyle}>Go to Square Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TextScreen")}>
        <Text style={styles.buttonStyle}>Go to Text Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BoxScreen")}>
        <Text style={styles.buttonStyle}>Go to Box Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 15
  },
  buttonStyle: {
    backgroundColor: "purple",
    color: "#ffffff",
    borderRadius: 20,
    padding: 12,
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center"
  }
});

export default HomeScreen;
