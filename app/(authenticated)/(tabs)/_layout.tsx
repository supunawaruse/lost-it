import React from "react";
import { Tabs } from "expo-router";
import { TabIcon } from "@/components/tabIcon";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={(props: any) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  {...props}
                  color={focused ? "#0061ff" : "#666876"}
                  size={24}
                />
              )}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={(props: any) => (
                <Ionicons
                  name={focused ? "people" : "people-outline"}
                  {...props}
                  color={focused ? "#0061ff" : "#666876"}
                  size={24}
                />
              )}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={(props: any) => (
                <Ionicons
                  name={focused ? "notifications" : "notifications-outline"}
                  {...props}
                  color={focused ? "#0061ff" : "#666876"}
                  size={24}
                />
              )}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={(props: any) => (
                <Ionicons
                  name={focused ? "person-circle" : "person-circle-outline"}
                  {...props}
                  color={focused ? "#0061ff" : "#666876"}
                  size={24}
                />
              )}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
