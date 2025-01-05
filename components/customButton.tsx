import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  type: "fill" | "outline"; // Type of button: fill or outline
  title: string; // Button text
  size?: "small" | "medium" | "large"; // Button size
  onPress: () => void; // Action when the button is pressed
  style?: StyleProp<ViewStyle>; // Additional styles for customization
  disabled?: boolean; // Disables the button
}

const CustomButton: React.FC<ButtonProps> = ({
  type,
  title,
  size = "medium",
  onPress,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.baseButton,
        styles[size],
        type === "fill"
          ? disabled
            ? styles.disabledFill // Apply a specific style for disabled fill buttons
            : styles.fill
          : disabled
          ? styles.disabledOutline // Apply a specific style for disabled outline buttons
          : styles.outline,
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          type === "fill" ? styles.textFill : styles.textOutline,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  fill: {
    backgroundColor: "#006FFD",
  },
  outline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#006FFD",
  },
  disabledFill: {
    backgroundColor: "#D4D6DD",
  },
  disabledOutline: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#D4D6DD",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  textFill: {
    color: "#FFFFFF",
  },
  textOutline: {
    color: "#006FFD",
  },
  small: {
    height: 32,
  },
  medium: {
    height: 48,
  },
  large: {
    height: 60,
  },
});

export default CustomButton;
