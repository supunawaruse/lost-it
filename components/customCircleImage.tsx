import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface CircleImageButtonProps {
  imageSource: any; // Image source (uri or static resources)
  diameter: number; // Diameter of the circle
  padding?: number; // Optional padding between the image and container
  backgroundColor?: string; // Optional background color for the padded space
  onPress?: () => void; // Function to be called when button is pressed (only used if isButton is true)
  isButton?: boolean; // Flag to determine if it's a button or just an image
  style?: object; // Optional custom styles
}

const CircleImageButton: React.FC<CircleImageButtonProps> = ({
  imageSource,
  diameter,
  padding = 0,
  backgroundColor = "transparent",
  onPress,
  isButton = false, // Default is false (not a button)
  style,
}) => {
  const content = (
    <View
      style={[
        styles.imageContainer,
        {
          width: diameter + padding * 2,
          height: diameter + padding * 2,
          borderRadius: (diameter + padding * 2) / 2,
          backgroundColor: backgroundColor, // Background color for the space
        },
        style,
      ]}
    >
      <Image
        source={imageSource}
        style={[
          styles.image,
          { width: diameter, height: diameter, borderRadius: diameter / 2 },
        ]}
      />
    </View>
  );

  // If isButton is true, make it a TouchableOpacity (button behavior)
  return isButton ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { width: diameter + padding * 2, height: diameter + padding * 2 },
      ]}
    >
      {content}
    </TouchableOpacity>
  ) : (
    content // If not a button, just display the image inside the circle
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensures the image is clipped to the circular shape
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default CircleImageButton;
