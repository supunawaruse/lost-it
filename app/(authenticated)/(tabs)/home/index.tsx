import { View, Text, Linking, Button } from "react-native";
import React from "react";
import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

const Home = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return <Button title="Sign out" onPress={handleSignOut} />;
};

export default Home;
