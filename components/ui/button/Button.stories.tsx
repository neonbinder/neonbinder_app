import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Text, View } from "react-native";
import { fn } from "storybook/test";
import { GluestackUIProvider } from "../gluestack-ui-provider";
import { Button, ButtonSpinner, ButtonText } from "./index";

// Simple icon component for demonstration
const StarIcon = ({ size = 18 }: { size?: number }) => (
  <View
    style={{
      width: size,
      height: size,
      backgroundColor: "currentColor",
      borderRadius: size / 2,
    }}
  />
);

const meta = {
  title: "UI/Button",
  component: Button,
  decorators: [
    (Story) => (
      <GluestackUIProvider>
        <View style={{ padding: 20, gap: 16 }}>
          <Story />
        </View>
      </GluestackUIProvider>
    ),
  ],
  tags: ["autodocs"],
  args: { onPress: fn() },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "positive",
        "negative",
        "outline",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button with text
export const Primary: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="md">
      <ButtonText variant="primary" size="md">
        Primary Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Secondary: Story = {
  render: (args) => (
    <Button {...args} variant="secondary" size="md">
      <ButtonText variant="secondary" size="md">
        Secondary Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Tertiary: Story = {
  render: (args) => (
    <Button {...args} variant="tertiary" size="md">
      <ButtonText variant="tertiary" size="md">
        Tertiary Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Positive: Story = {
  render: (args) => (
    <Button {...args} variant="positive" size="md">
      <ButtonText variant="positive" size="md">
        Positive Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Negative: Story = {
  render: (args) => (
    <Button {...args} variant="negative" size="md">
      <ButtonText variant="negative" size="md">
        Negative Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

// Variant examples
export const Outline: Story = {
  render: (args) => (
    <Button {...args} variant="outline" size="md">
      <ButtonText variant="outline" size="md">
        Outline Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Link: Story = {
  render: (args) => (
    <Button {...args} variant="link" size="md">
      <ButtonText variant="link" size="md">
        Link Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

// Size examples
export const ExtraSmall: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="xs">
      <ButtonText variant="primary" size="xs">
        XS Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Small: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="sm">
      <ButtonText variant="primary" size="sm">
        Small Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Medium: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="md">
      <ButtonText variant="primary" size="md">
        Medium Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const Large: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="lg">
      <ButtonText variant="primary" size="lg">
        Large Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

export const ExtraLarge: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="xl">
      <ButtonText variant="primary" size="xl">
        XL Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

// Button with icon
export const WithIcon: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="md">
      <StarIcon size={18} />
      <ButtonText variant="primary" size="md">
        With Icon
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

// Button with icon only
export const IconOnly: Story = {
  render: (args) => (
    <Button
      {...args}
      variant="primary"
      size="md"
      style={{ width: 48, height: 48 }}
    >
      <StarIcon size={18} />
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

// Loading state
export const Loading: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="md">
      <ButtonSpinner />
      <ButtonText variant="primary" size="md">
        Loading...
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
  },
};

// Disabled state
export const Disabled: Story = {
  render: (args) => (
    <Button {...args} variant="primary" size="md" style={{ opacity: 0.4 }}>
      <ButtonText variant="primary" size="md">
        Disabled Button
      </ButtonText>
    </Button>
  ),
  args: {
    onPress: fn(),
    disabled: true,
  },
};

// Simple test story to debug
export const SimpleTest: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Simple Test</Text>
      <Button variant="primary" size="md">
        <ButtonText variant="primary" size="md">
          Test Button
        </ButtonText>
      </Button>
      <View
        style={{ padding: 10, backgroundColor: "#f0f0f0", borderRadius: 4 }}
      >
        <Text>This is a test view to verify rendering works</Text>
      </View>
    </View>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Solid Variants
        </Text>
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <Button variant="primary" size="md">
            <ButtonText variant="primary" size="md">
              Primary
            </ButtonText>
          </Button>
          <Button variant="secondary" size="md">
            <ButtonText variant="secondary" size="md">
              Secondary
            </ButtonText>
          </Button>
          <Button variant="tertiary" size="md">
            <ButtonText variant="tertiary" size="md">
              Tertiary
            </ButtonText>
          </Button>
          <Button variant="positive" size="md">
            <ButtonText variant="positive" size="md">
              Positive
            </ButtonText>
          </Button>
          <Button variant="negative" size="md">
            <ButtonText variant="negative" size="md">
              Negative
            </ButtonText>
          </Button>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Outline Variants
        </Text>
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <Button variant="outline" size="md">
            <ButtonText variant="outline" size="md">
              Primary
            </ButtonText>
          </Button>
          <Button variant="outline" size="md">
            <ButtonText variant="outline" size="md">
              Secondary
            </ButtonText>
          </Button>
          <Button variant="outline" size="md">
            <ButtonText variant="outline" size="md">
              Positive
            </ButtonText>
          </Button>
          <Button variant="outline" size="md">
            <ButtonText variant="outline" size="md">
              Negative
            </ButtonText>
          </Button>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Link Variants
        </Text>
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <Button variant="link" size="md">
            <ButtonText variant="link" size="md">
              Primary
            </ButtonText>
          </Button>
          <Button variant="link" size="md">
            <ButtonText variant="link" size="md">
              Secondary
            </ButtonText>
          </Button>
          <Button variant="link" size="md">
            <ButtonText variant="link" size="md">
              Positive
            </ButtonText>
          </Button>
          <Button variant="link" size="md">
            <ButtonText variant="link" size="md">
              Negative
            </ButtonText>
          </Button>
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          All Sizes
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary" size="xs">
            <ButtonText variant="primary" size="xs">
              XS
            </ButtonText>
          </Button>
          <Button variant="primary" size="sm">
            <ButtonText variant="primary" size="sm">
              SM
            </ButtonText>
          </Button>
          <Button variant="primary" size="md">
            <ButtonText variant="primary" size="md">
              MD
            </ButtonText>
          </Button>
          <Button variant="primary" size="lg">
            <ButtonText variant="primary" size="lg">
              LG
            </ButtonText>
          </Button>
          <Button variant="primary" size="xl">
            <ButtonText variant="primary" size="xl">
              XL
            </ButtonText>
          </Button>
        </View>
      </View>
    </View>
  ),
};
