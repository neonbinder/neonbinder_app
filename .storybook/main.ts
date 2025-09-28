import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  "stories": [
    "../components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/react-native-web-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    // Ensure proper handling of React Native Web
    config.define = {
      ...config.define,
      global: 'globalThis',
    };
    return config;
  }
};
export default config;