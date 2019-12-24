import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        coverImage={require("../../assets/forest.jpg")}
        score={49}
      />
      <ImageDetails
        title="Beach"
        coverImage={require("../../assets/beach.jpg")}
        score={80}
      />
      <ImageDetails
        title="Mountain"
        coverImage={require("../../assets/mountain.jpg")}
        score={65}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
