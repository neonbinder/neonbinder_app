/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Neon color scheme
const neonGreen = '#00D558';    // Primary
const neonPink = '#FF2E9A';     // Destructive / Cancel
const neonYellow = '#FFE600';   // Warning / Accent
const neonBlue = '#00C2FF';     // Info / Accent
const neonPurple = '#A44AFF';   // Tabs / UI

// Green scale colors from design system (Primary) - Light theme
const green1Light = '#f9fffa';   // Green-1 light
const green2Light = '#f2fcf3';  // Green-2 light
const green3Light = '#e1fae4';  // Green-3 light (50)
const green4Light = '#cef6d2';  // Green-4 light (100)
const green5Light = '#b6efbd';  // Green-5 light (200)
const green6Light = '#98e6a4';  // Green-6 light (300)
const green7Light = '#6bd980';  // Green-7 light (400)
const green8Light = '#00c649';  // Green-8 light (500)
const green9Light = '#00d558';  // Green-9 light (600) - Primary
const green10Light = '#00c94c'; // Green-10 light (700)
const green11Light = '#00851e'; // Green-11 light (800)
const green12Light = '#054017'; // Green-12 light (900)

// Green scale colors from design system (Primary) - Dark theme
const green1Dark = '#060c07';   // Green-1 dark
const green2Dark = '#111a12';   // Green-2 dark
const green3Dark = '#122d17';   // Green-3 dark
const green4Dark = '#103c1a';   // Green-4 dark
const green5Dark = '#154a22';   // Green-5 dark
const green6Dark = '#1d592b';   // Green-6 dark
const green7Dark = '#246a35';   // Green-7 dark
const green8Dark = '#297e3e';   // Green-8 dark
const green9Dark = '#00d558';   // Green-9 dark (Primary)
const green10Dark = '#00c94c';  // Green-10 dark
const green11Dark = '#1adb5e';  // Green-11 dark
const green12Dark = '#adf4b7';  // Green-12 dark

// Gray scale colors from design system - Light theme
const gray1Light = '#fcfcfd';   // Gray-1 light
const gray2Light = '#f9f9fb';   // Gray-2 light
const gray3Light = '#eff0f3';   // Gray-3 light
const gray4Light = '#e7e8ec';   // Gray-4 light
const gray5Light = '#e0e1e6';   // Gray-5 light
const gray6Light = '#d8d9e0';   // Gray-6 light
const gray7Light = '#cdced7';   // Gray-7 light
const gray8Light = '#b9bbc6';   // Gray-8 light
const gray9Light = '#8b8d98';   // Gray-9 light
const gray10Light = '#80828d';  // Gray-10 light
const gray11Light = '#62636c';  // Gray-11 light
const gray12Light = '#1e1f24';  // Gray-12 light

// Gray scale colors from design system - Dark theme
const gray1Dark = '#0a0a0c';    // Gray-1 dark
const gray2Dark = '#18181a';    // Gray-2 dark
const gray3Dark = '#212225';    // Gray-3 dark
const gray4Dark = '#29292d';    // Gray-4 dark
const gray5Dark = '#303136';    // Gray-5 dark
const gray6Dark = '#393a40';    // Gray-6 dark
const gray7Dark = '#46484f';    // Gray-7 dark
const gray8Dark = '#5e606a';    // Gray-8 dark
const gray9Dark = '#6c6e79';    // Gray-9 dark
const gray10Dark = '#797b86';   // Gray-10 dark
const gray11Dark = '#b2b3bd';   // Gray-11 dark
const gray12Dark = '#eeeef0';   // Gray-12 dark

// Blue scale colors from design system (Info/Accent) - Light theme
const blue1Light = '#fafdff';   // Blue-1 light
const blue2Light = '#f1fbff';   // Blue-2 light
const blue3Light = '#e2f5ff';   // Blue-3 light (50)
const blue4Light = '#ccf1ff';   // Blue-4 light (100)
const blue5Light = '#b3e9ff';   // Blue-5 light (200)
const blue6Light = '#96ddff';   // Blue-6 light (300)
const blue7Light = '#6dcefa';   // Blue-7 light (400)
const blue8Light = '#00b9f6';   // Blue-8 light (500)
const blue9Light = '#00c2ff';   // Blue-9 light (600) - Info/Accent
const blue10Light = '#00b7f3';  // Blue-10 light (700)
const blue11Light = '#0080b3';  // Blue-11 light (800)
const blue12Light = '#003a58';  // Blue-12 light (900)

export const Colors = {
  light: {
    text: '#ededed',           // Light text for black background
    background: '#000000',     // --background from global.css
    tint: neonGreen,           // Primary accent
    icon: '#ededed',           // Light icons for black background
    tabIconDefault: blue5Light, // Default tab icons - light blue
    tabIconSelected: neonGreen, // Selected tab icons
    // Neon colors
    neonGreen,
    neonPink,
    neonYellow,
    neonBlue,
    neonPurple,
    // Gray scale
    gray1: gray1Light,
    gray2: gray2Light,
    gray3: gray3Light,
    gray4: gray4Light,
    gray5: gray5Light,
    gray6: gray6Light,
    gray7: gray7Light,
    gray8: gray8Light,
    gray9: gray9Light,
    gray10: gray10Light,
    gray11: gray11Light,
    gray12: gray12Light,
    // Green scale (Primary)
    green1: green1Light,
    green2: green2Light,
    green3: green3Light,
    green4: green4Light,
    green5: green5Light,
    green6: green6Light,
    green7: green7Light,
    green8: green8Light,
    green9: green9Light,
    green10: green10Light,
    green11: green11Light,
    green12: green12Light,
    // Blue scale (Info/Accent)
    blue1: blue1Light,
    blue2: blue2Light,
    blue3: blue3Light,
    blue4: blue4Light,
    blue5: blue5Light,
    blue6: blue6Light,
    blue7: blue7Light,
    blue8: blue8Light,
    blue9: blue9Light,
    blue10: blue10Light,
    blue11: blue11Light,
    blue12: blue12Light,
    // Convenience aliases
    primary200: green5Light,   // Primary-200 from design system
  },
  dark: {
    text: '#ededed',           // --foreground from global.css dark
    background: '#000000',     // Solid black background
    tint: neonGreen,           // Primary accent
    icon: '#ededed',           // Icons use foreground color
    tabIconDefault: blue5Light, // Default tab icons - light blue
    tabIconSelected: neonGreen, // Selected tab icons
    // Neon colors
    neonGreen,
    neonPink,
    neonYellow,
    neonBlue,
    neonPurple,
    // Gray scale
    gray1: gray1Dark,
    gray2: gray2Dark,
    gray3: gray3Dark,
    gray4: gray4Dark,
    gray5: gray5Dark,
    gray6: gray6Dark,
    gray7: gray7Dark,
    gray8: gray8Dark,
    gray9: gray9Dark,
    gray10: gray10Dark,
    gray11: gray11Dark,
    gray12: gray12Dark,
    // Green scale (Primary)
    green1: green1Dark,
    green2: green2Dark,
    green3: green3Dark,
    green4: green4Dark,
    green5: green5Dark,
    green6: green6Dark,
    green7: green7Dark,
    green8: green8Dark,
    green9: green9Dark,
    green10: green10Dark,
    green11: green11Dark,
    green12: green12Dark,
    // Blue scale (Info/Accent) - using same values as light for now
    blue1: blue1Light,
    blue2: blue2Light,
    blue3: blue3Light,
    blue4: blue4Light,
    blue5: blue5Light,
    blue6: blue6Light,
    blue7: blue7Light,
    blue8: blue8Light,
    blue9: blue9Light,
    blue10: blue10Light,
    blue11: blue11Light,
    blue12: blue12Light,
    // Convenience aliases
    primary200: green5Light,   // Primary-200 from design system (using light value)
  },
};

export const Fonts = Platform.select({
  ios: {
    /** Lexend font family - matches global.css font-sans */
    sans: 'Lexend',
    serif: 'Lexend',
    rounded: 'Lexend',
    mono: 'Courier',
  },
  default: {
    sans: 'Lexend',
    serif: 'Lexend',
    rounded: 'Lexend',
    mono: 'Courier',
  },
  web: {
    // Matches global.css: font-family: 'Lexend', Arial, Helvetica, sans-serif;
    sans: "'Lexend', Arial, Helvetica, sans-serif",
    serif: "'Lexend', Georgia, 'Times New Roman', serif",
    rounded: "'Lexend', 'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "Courier, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});