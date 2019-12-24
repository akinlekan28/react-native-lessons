import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, coverImage, score }) => {
  return (
    <View>
      <Image source={coverImage} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
