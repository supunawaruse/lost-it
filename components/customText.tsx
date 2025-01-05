import React, { ReactNode } from "react";
import { Text, TextStyle, StyleSheet, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  children: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  weight?: 1 | 2 | 3 | 4 | 5;
  color?: "primary" | "hint" | "textPrimary" | "subHint";
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  size = 3,
  weight = 3,
  color = "primary",
  style = {},
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        styles[`size${size}` as keyof typeof styles],
        styles[`weight${weight}` as keyof typeof styles],
        styles[color],
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000",
  },

  size1: { fontSize: 12 },
  size2: { fontSize: 14 },
  size3: { fontSize: 16 },
  size4: { fontSize: 18 },
  size5: { fontSize: 20 },
  size6: { fontSize: 24 },
  size7: { fontSize: 28 },
  size8: { fontSize: 32 },

  weight1: { fontWeight: "100" }, // Thin
  weight2: { fontWeight: "300" }, // Light
  weight3: { fontWeight: "500" }, // Medium
  weight4: { fontWeight: "700" }, // Bold
  weight5: { fontWeight: "900" }, // Extra Bold

  primary: { color: "#006FFD" },
  textPrimary: { color: "#1F2024" },
  hint: { color: "#71727A" },
  subHint: { color: "#8F9098" },
});

export default CustomText;
