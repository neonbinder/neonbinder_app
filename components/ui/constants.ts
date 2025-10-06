// Theme color constants (converted from RGB tuples to hex)
export const COLORS = {
  // Primary colors
  NEON_GREEN: "#00D558", // rgb(0, 213, 88)
  NEON_GREEN_DARK: "#00BF4F", // rgb(0, 191, 79)
  NEON_GREEN_DARKER: "#00AA46", // rgb(0, 170, 70)
  
  // Secondary colors
  ELECTRIC_BLUE: "#00C2FF", // rgb(0, 194, 255)
  ELECTRIC_BLUE_DARK: "#00B8E6", // rgb(0, 184, 230)
  ELECTRIC_BLUE_DARKER: "#00AECC", // rgb(0, 174, 204)
  
  // Tertiary colors
  NEON_PURPLE: "#A44AFF", // rgb(164, 74, 255)
  NEON_PURPLE_DARK: "#9333E6", // rgb(147, 51, 230)
  NEON_PURPLE_DARKER: "#8227CC", // rgb(130, 39, 204)
  
  // Status colors
  SUCCESS_GREEN: "#348352", // rgb(52, 131, 82)
  SUCCESS_GREEN_DARK: "#2D6B47", // rgb(45, 107, 71)
  ERROR_RED: "#E63535", // rgb(230, 53, 53)
  ERROR_RED_DARK: "#CC2E2E", // rgb(204, 46, 46)
  
  // Neutral colors
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  TRANSPARENT: "transparent",
} as const;

// Color aliases for easier usage
export const {
  NEON_GREEN,
  ELECTRIC_BLUE,
  NEON_PURPLE,
  SUCCESS_GREEN,
  ERROR_RED,
  BLACK,
  WHITE,
  TRANSPARENT,
} = COLORS;

// Gray scale colors from design system
export const GRAY_COLORS = {
  GRAY_9_LIGHT: "#8b8d98",  // Gray-9 light theme
  GRAY_9_DARK: "#6c6e79",   // Gray-9 dark theme
} as const;
