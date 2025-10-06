import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/themed-view";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <Heading size="2xl">This is a modal</Heading>
      <Link href="/" dismissTo style={styles.link}>
        <Text size="md" style={{ color: "#0a7ea4" }}>
          Go to home screen
        </Text>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
