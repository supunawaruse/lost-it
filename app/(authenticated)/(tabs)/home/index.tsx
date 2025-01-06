import { View, Text, Button } from "react-native";
import React from "react";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

const Home = () => {
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

  return (
    <View>
      <Text>{user?.lastName}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Home;
