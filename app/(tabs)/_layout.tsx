import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, useColorScheme } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { NEON_GREEN } from "@/components/ui/constants";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  // Debug: Log available colors
  console.log("Available colors:", Object.keys(colors));
  console.log("primary200:", colors.primary200);

  const tabBarLabel =
    (title: string) =>
    ({ focused }: { focused: boolean }) =>
      (
        <Text
          style={[
            styles.tabLabel,
            focused ? styles.tabLabelActive : { color: colors.tabIconDefault },
          ]}
        >
          {title}
        </Text>
      );

  return (
    <Tabs
      initialRouteName="collection"
      screenOptions={{
        tabBarActiveTintColor: NEON_GREEN,
        tabBarInactiveTintColor: colors.tabIconDefault, // Light blue for inactive tabs
        tabBarStyle: {
          backgroundColor: "#000000", // Black background
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          tabBarLabel: tabBarLabel("Collection"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="square.grid.2x2.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: "Inventory",
          tabBarLabel: tabBarLabel("Inventory"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="shippingbox.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="listing"
        options={{
          title: "Listing",
          tabBarLabel: tabBarLabel("Listing"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="doc.text.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: tabBarLabel("Settings"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  tabLabelActive: {
    color: NEON_GREEN,
  },
});
