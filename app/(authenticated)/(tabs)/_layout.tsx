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
          backgroundColor: "#F8F9FE",
          borderTopColor: "transparent",
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
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={(props: any) => (
                <Ionicons
                  name={focused ? "chatbox" : "chatbox-outline"}
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
