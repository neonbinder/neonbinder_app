import { ThemedView } from "@/components/themed-view";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function InventoryScreen() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <Heading size="2xl" style={{ marginBottom: 20 }}>
        Inventory
      </Heading>
      <Text size="md" style={{ marginBottom: 15 }}>
        Manage your product inventory, track stock levels, and monitor item
        availability.
      </Text>
      <Text size="sm">
        Add, edit, and organize your products with detailed information and
        pricing.
      </Text>
    </ThemedView>
  );
}
