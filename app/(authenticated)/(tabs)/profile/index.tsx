import CustomText from "@/components/customText";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  const { user } = useUser();

  const list: any = [
    { name: "Listed Items", icon: "pricetag-outline" },
    { name: "Found Items", icon: "checkmark-circle-outline" },
    { name: "Notifications", icon: "notifications-outline" },
    { name: "Privacy Policy", icon: "alert-circle-outline" },
    { name: "Help And Support", icon: "help-buoy-outline" },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
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

        <CustomText size={6} weight={3} color="textPrimary">
          {user?.firstName} {user?.lastName}
        </CustomText>

        <CustomText size={4} weight={3} color="hint">
          {user?.primaryEmailAddress?.emailAddress}
        </CustomText>
      </View>

      <View style={styles.middleSection}>
        {list.map((item: any, index: any) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              gap: 15,
              marginBottom: 10,
            }}
          >
            <Ionicons name={item.icon || ""} size={24} color="#006FFD" />
            <CustomText size={4} weight={3} style={{ color: "#2F3036" }}>
              {item.name}
            </CustomText>
          </View>
        ))}
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={handleSignOut}
        >
          <CustomText>
            <Ionicons name="power" size={24} color="#FF183D" />
          </CustomText>
          <CustomText size={5} weight={3} style={{ color: "#FF183D" }}>
            Logout
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    height: "40%",
    padding: 20,
    paddingHorizontal: 30,
    borderBottomColor: "#E8E9F1",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleSection: {
    height: "50%",
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
  },
  bottomSection: {
    height: "10%",
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#F8F9FE",
    borderTopColor: "#E8E9F1",
    borderTopWidth: 1,
    padding: 10,
  },
});

export default ProfileScreen;
