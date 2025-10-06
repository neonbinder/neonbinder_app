import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";

export default function SettingsStackLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Stack
      screenOptions={{
        headerTitle: "Settings",
        headerTintColor: colors.tabIconSelected,
        headerTitleStyle: { color: colors.tabIconSelected },
        headerStyle: { backgroundColor: colors.background },
        contentStyle: { backgroundColor: "#000000" },
      }}
    />
  );
}
