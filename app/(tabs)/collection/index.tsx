import { ThemedView } from "@/components/themed-view";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function CollectionScreen() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <Heading size="2xl" style={{ marginBottom: 20 }}>
        Collection
      </Heading>
      <Heading size="lg" style={{ marginBottom: 10 }}>
        Welcome to your Collection
      </Heading>
      <Heading size="md" style={{ marginBottom: 20 }}>
        This heading uses Lexend font and primary green-600 color by default
      </Heading>

      <Text size="md" style={{ marginBottom: 15 }}>
        This is main body text using the Text component. It uses Lexend font and
        white color (#FFFFFF) for excellent readability on the black background.
      </Text>

      <Text size="sm" style={{ marginBottom: 10 }}>
        This is smaller body text. Perfect for descriptions, captions, and
        secondary information.
      </Text>

      <Text size="lg" bold style={{ marginBottom: 10 }}>
        This is larger, bold text for emphasis while maintaining the white color
        and Lexend font.
      </Text>
    </ThemedView>
  );
}
