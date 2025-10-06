import { ThemedView } from "@/components/themed-view";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function SettingsScreen() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <Heading size="2xl" style={{ marginBottom: 20 }}>
        Settings
      </Heading>
      <Text size="md" style={{ marginBottom: 15 }}>
        Configure your account preferences, notification settings, and app
        customization options.
      </Text>
      <Text size="sm">
        Manage your profile, privacy settings, and application preferences.
      </Text>
    </ThemedView>
  );
}
