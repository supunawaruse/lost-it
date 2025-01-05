import React from "react";
import { View, StyleSheet } from "react-native";

interface DividerProps {
  style?: object; // Optional custom styles for the divider
  verticalMargin?: number; // Optional vertical margin to control spacing
}

const CustomDivider: React.FC<DividerProps> = ({
  style,
  verticalMargin = 10,
}) => {
  return (
    <View style={[styles.divider, { marginVertical: verticalMargin }, style]} />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1, // Height of the divider line
    backgroundColor: "#D4D6DD", // Divider color
  },
});

export default CustomDivider;
