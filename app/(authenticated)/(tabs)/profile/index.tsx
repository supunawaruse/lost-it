import CustomText from "@/components/customText";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  const { user } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const list: any = [
    {
      name: "Listed Items",
      icon: "pricetag-outline",
      onPress: () => {},
    },
    {
      name: "Found Items",
      icon: "checkmark-circle-outline",
      onPress: () => {},
    },
    { name: "Notifications", icon: "notifications-outline", onPress: () => {} },
    { name: "Privacy Policy", icon: "alert-circle-outline", onPress: () => {} },
    { name: "Help And Support", icon: "help-buoy-outline", onPress: () => {} },
    { name: "LogOut", icon: "power-outline", onPress: handleSignOut },
  ];

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
          <View style={styles.topSection}>
            <Image
              src={user?.imageUrl ? user.imageUrl : ""}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                marginBottom: 10,
              }}
            />

            <CustomText size={5} weight={3} color="textPrimary">
              {user?.firstName} {user?.lastName}
            </CustomText>

            <CustomText size={3} weight={3} color="hint">
              {user?.primaryEmailAddress?.emailAddress}
            </CustomText>
          </View>

          <View style={styles.middleSection}>
            {list.map((item: any, index: any) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  gap: 15,
                  marginBottom: 15,
                  borderRadius: 15,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <View style={styles.groupIcon}>
                  <Ionicons name={item.icon || ""} size={24} color="#006FFD" />
                </View>

                <CustomText size={3} weight={3} style={{ color: "#2F3036" }}>
                  {item.name}
                </CustomText>
              </TouchableOpacity>
            ))}
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
    backgroundColor: "#F8F9FE",
  },
  topSection: {
    padding: 20,
    paddingHorizontal: 30,
    borderBottomColor: "#E8E9F1",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleSection: {
    padding: 20,
    paddingHorizontal: 20,
  },
  groupIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#EFF6FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
