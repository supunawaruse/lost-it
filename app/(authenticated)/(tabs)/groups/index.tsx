import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "@/components/customText";
import { Ionicons } from "@expo/vector-icons";
import CustomAddButton from "@/components/customAddButton";
import CustomInput from "@/components/customInput";
import GroupCard from "@/components/groupCard";

const Groups = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "android" ? "#ffffff" : undefined}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.container}>
          <CustomText size={7} weight={4} color="textPrimary">
            Groups
          </CustomText>

          <CustomInput
            placeholder="Search group"
            style={{
              marginVertical: 10,
              borderColor: "transparent",
            }}
          />

          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: "#6FBAFF",
              padding: 20,
              marginVertical: 10,
            }}
          >
            <CustomAddButton />
            <CustomText
              size={5}
              weight={3}
              color="textSub"
              style={{ marginTop: 10 }}
            >
              Create a group
            </CustomText>
            <CustomText size={3} weight={2} color="textSub">
              Create new group to share items
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: "#FFB37C",
              padding: 20,
              paddingVertical: 10,
              marginVertical: 10,
            }}
          >
            <CustomText size={5} weight={3} color="textSub">
              Pending Invitations
            </CustomText>
            <CustomText size={3} weight={2} color="textSub">
              Check wether you have any pending invitations
            </CustomText>
          </TouchableOpacity>

          <View style={{ marginVertical: 12 }}>
            <CustomText size={5} weight={3} color="textPrimary">
              My Groups
            </CustomText>

            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F8F9FE",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
export default Groups;
