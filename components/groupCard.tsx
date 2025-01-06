import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import CustomText from "./customText";

const GroupCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <View style={styles.leftSection}>
          <View style={styles.groupIcon}>
            <Feather name="users" size={24} color="#006FFD" />
          </View>
          <View>
            <CustomText size={3} color="textPrimary">
              Group Name
            </CustomText>
            <CustomText size={2} color="hint">
              12 members • 12 active items
            </CustomText>
          </View>
        </View>
        <View style={styles.roleContainer}>
          <Text style={styles.roleText}>Admin</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  groupIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#EFF6FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  roleContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  roleText: {
    fontSize: 12,
    backgroundColor: "#E7F4E8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    color: "#298267",
    fontWeight: "500",
    borderRadius: 12,
  },
});

export default GroupCard;
