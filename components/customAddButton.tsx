import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomAddButton = () => {
  return (
    <View
      style={{
        height: 60,
        width: 60,
        backgroundColor: "#B4DBFF",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#2897FF",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="add-outline" size={24} color="#fff" />
      </View>
    </View>
  );
};

export default CustomAddButton;

const styles = StyleSheet.create({});
