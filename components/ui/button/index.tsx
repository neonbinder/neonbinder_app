"use client";
import { createButton } from "@gluestack-ui/core/button/creator";
import { UIIcon } from "@gluestack-ui/core/icon/creator";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

// Create the Gluestack Button components
const UIButton = createButton({
  Root: Pressable,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon,
});

import { BLACK, COLORS, WHITE } from "../constants";

// Button component - use Gluestack UI's built-in theming
type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "positive"
    | "negative"
    | "outline"
    | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  style?: any;
  onPress?: () => void;
  disabled?: boolean;
};

const Button = React.forwardRef<any, ButtonProps>(
  ({ variant = "primary", size = "md", children, style, ...props }, ref) => {
    // Get variant-specific styling using theme colors
    const getVariantStyle = () => {
      switch (variant) {
        case "primary":
          return {
            backgroundColor: COLORS.NEON_GREEN,
            shadowColor: COLORS.NEON_GREEN,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            elevation: 8,
          };
        case "secondary":
          return {
            backgroundColor: COLORS.ELECTRIC_BLUE,
            shadowColor: COLORS.ELECTRIC_BLUE,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            elevation: 8,
          };
        case "tertiary":
          return {
            backgroundColor: COLORS.NEON_PURPLE,
            shadowColor: COLORS.NEON_PURPLE,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            elevation: 8,
          };
        case "positive":
          return {
            backgroundColor: COLORS.SUCCESS_GREEN,
            shadowColor: COLORS.SUCCESS_GREEN,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            elevation: 8,
          };
        case "negative":
          return {
            backgroundColor: COLORS.ERROR_RED,
            shadowColor: COLORS.ERROR_RED,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            elevation: 8,
          };
        case "outline":
          return {
            backgroundColor: COLORS.TRANSPARENT,
            borderWidth: 2,
            borderColor: COLORS.NEON_GREEN,
          };
        case "link":
          return {
            backgroundColor: COLORS.TRANSPARENT,
            paddingHorizontal: 0,
            paddingVertical: 0,
            shadowOpacity: 0,
            elevation: 0,
            borderWidth: 0,
          };
        default:
          return {};
      }
    };

    // Get size-specific styling
    const getSizeStyle = () => {
      switch (size) {
        case "xs":
          return {
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 6,
          };
        case "sm":
          return {
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 6,
          };
        case "md":
          return {
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
          };
        case "lg":
          return {
            paddingHorizontal: 32,
            paddingVertical: 16,
            borderRadius: 10,
          };
        case "xl":
          return {
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 12,
          };
        default:
          return {};
      }
    };

    const variantStyle = getVariantStyle();
    const sizeStyle = getSizeStyle();

    return (
      <UIButton
        ref={ref}
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          getSizeStyle(),
          getVariantStyle(),
          props.disabled && { opacity: 0.4 },
          style,
        ]}
        {...props}
      >
        {children}
      </UIButton>
    );
  }
);

// ButtonText component with styling
type ButtonTextProps = {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "positive"
    | "negative"
    | "outline"
    | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  style?: any;
};

const ButtonText = React.forwardRef<any, ButtonTextProps>(
  ({ variant = "primary", size = "md", children, style, ...props }, ref) => {
    // Get variant-specific text styling
    const getVariantTextStyle = () => {
      switch (variant) {
        case "primary":
          return { color: BLACK };
        case "secondary":
          return { color: WHITE };
        case "tertiary":
          return { color: WHITE };
        case "positive":
          return { color: WHITE };
        case "negative":
          return { color: WHITE };
        case "outline":
          return { color: COLORS.NEON_GREEN };
        case "link":
          return { color: COLORS.ELECTRIC_BLUE };
        default:
          return {};
      }
    };

    // Get size-specific text styling
    const getSizeTextStyle = () => {
      switch (size) {
        case "xs":
          return { fontSize: 12 };
        case "sm":
          return { fontSize: 14 };
        case "md":
          return { fontSize: 16 };
        case "lg":
          return { fontSize: 18 };
        case "xl":
          return { fontSize: 20 };
        default:
          return {};
      }
    };

    const baseTextStyle = {
      fontWeight: "600" as const,
    };

    const combinedTextStyle = {
      ...baseTextStyle,
      ...getSizeTextStyle(),
      ...getVariantTextStyle(),
      ...style,
    };

    return (
      <UIButton.Text ref={ref} style={combinedTextStyle} {...props}>
        {children}
      </UIButton.Text>
    );
  }
);

// ButtonIcon component
const ButtonIcon = UIButton.Icon;

// ButtonSpinner component
const ButtonSpinner = UIButton.Spinner;

// ButtonGroup component
const ButtonGroup = UIButton.Group;

Button.displayName = "Button";
ButtonText.displayName = "ButtonText";
ButtonIcon.displayName = "ButtonIcon";
ButtonSpinner.displayName = "ButtonSpinner";
ButtonGroup.displayName = "ButtonGroup";

export { Button, ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText };
