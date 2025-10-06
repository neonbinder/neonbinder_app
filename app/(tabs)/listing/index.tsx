import { ThemedView } from "@/components/themed-view";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function ListingScreen() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <Heading size="2xl" style={{ marginBottom: 20 }}>
        Listing
      </Heading>
      <Text size="md" style={{ marginBottom: 15 }}>
        Create and manage your product listings with detailed descriptions and
        pricing.
      </Text>
      <Text size="sm">
        Set up your storefront, configure product details, and manage your
        marketplace presence.
      </Text>
    </ThemedView>
  );
}
