import React from "react";
import { Stack } from "expo-router";

const AuthenticatedLayout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthenticatedLayout;
